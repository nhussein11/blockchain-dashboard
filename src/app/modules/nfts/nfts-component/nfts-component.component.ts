import { Component, ElementRef, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Nft, OwnedNft } from 'src/app/models/Nfts';
import { NftDetailsComponent } from 'src/app/modules/nfts/nft-details/nft-details.component'
import { NftsService } from 'src/app/services/nfts.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-nfts-component',
  templateUrl: './nfts-component.component.html',
  styleUrls: ['./nfts-component.component.css']
})
export class NftsComponentComponent implements OnInit {

  @ViewChild('ownerInput')  ownerInput!: ElementRef<HTMLInputElement>;

  nftsDataLoaded: boolean = false;
  nfts: Nft[] = [];
  selectedNft: Nft = {} as Nft;
  owner: string = '0xfae46f94ee7b2acb497cecaff6cff17f621c693d';
  invalidOwner: boolean = false;
  nftIsSelected: boolean = false;
  // owner: string ='0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  defaultImage: string = 'src/assets/no_image_available_icon.jpg';

  imgSrcTest?: string = ''

  errorMessage:string=''

  constructor(private _nftService: NftsService,
    private modal: NgbModal,
    private _sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    this.loadNfts(this.owner);
  }


  loadNfts(owner: string) {
    this.nfts = []
    this._nftService.getNfts(owner).subscribe(
      (response: Nft[]) => {

        this.nfts = response.filter(nft => nft !== undefined);

        this.nfts.forEach((nft) => {
          if (nft.image?.startsWith('data')) {

            let dataURI = nft.image;
            let blob = this.dataURItoBlob(dataURI);
            let objectURL = URL.createObjectURL(blob);
            
            let trustedImgSource = this._sanitizer.bypassSecurityTrustUrl(objectURL)
            // let trustedAndSanitizedImgSourceString = this._sanitizer.sanitize(SecurityContext.URL, trustedImgSource)

            nft.image = trustedImgSource?.toString();
            this.imgSrcTest = trustedImgSource?.toString();
            // console.log(nft.image)
            // let reader = new FileReader();
            // reader.readAsDataURL(blob)
            // reader.onloadend = function() {
            //   let base64data = reader.result;     
            //   console.log(base64data)

            // }
          }
        })
        this.nftsDataLoaded = true;
      }
      , ((err:Error)=>{
        console.log(err)
        this.errorMessage = err.message 
        this.invalidOwner=true
      })
    )
  }
  getImgContent(image:string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(image);
  }

  dataURItoBlob(dataURI: string) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;

    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  // https://stackoverflow.com/questions/51416374/how-to-convert-base64-to-normal-image-url

  searchNftsByContract() {
    
    !this.ownerInput.nativeElement.value
      ?
      (
        this.invalidOwner = true,
        this.nftsDataLoaded = true,
        this.owner = ''
      )
      :
      this.invalidOwner = false
      this.nfts = [],
      this.loadNfts(this.ownerInput.nativeElement.value);
  }

  isEmptyNft(nft: Nft) {
    return (nft && (Object.keys(nft).length === 0));
  }


  openNftDetails(nft: Nft) {
    
    this.selectedNft = nft;

    const modalRef = this.modal.open(NftDetailsComponent, { size: 'xl', centered: true, scrollable: true, backdropClass: "modal-backdrop" });

    (<NftDetailsComponent>modalRef.componentInstance).nft = this.selectedNft;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((result) => {
      console.log(result);
    });

    this.selectedNft = {} as Nft;

  }
}
