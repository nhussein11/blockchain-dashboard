import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



import { DomSanitizer } from '@angular/platform-browser';
import { LocalService } from 'src/app/services/local.service';
import { Nft } from '../../models/Nfts';
import { NftDetailsComponent } from '../nft-details/nft-details.component';
import { NftsService } from '../../services/nfts.service';


@Component({
  selector: 'app-nfts-component',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {

  @ViewChild('ownerInput') ownerInput!: ElementRef<HTMLInputElement>;

  nftsDataLoaded: boolean = false;
  nfts: Nft[] = [];
  selectedNft: Nft = {} as Nft;
  owner: string = '0xfae46f94ee7b2acb497cecaff6cff17f621c693d';
  invalidOwner: boolean = false;
  nftIsSelected: boolean = false;
  // owner: string ='0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  defaultImage: string = 'src/assets/no_image_available_icon.jpg';

  imgSrcTest?: string = ''

  errorMessage: string = ''
  
  constructor(
    private _nftService: NftsService,
    private _modal: NgbModal,
    private _sanitizer: DomSanitizer,
    private _localService: LocalService,
  ) { }

  ngOnInit(): void {
    this.loadNfts(this.owner);
  }


  loadNfts(owner: string) {
    this.nfts = []
    this._nftService.getNfts(owner).subscribe(
      (response: Nft[]) => {
        this.nfts = response.filter(nft => nft !== undefined);
        this.nftsDataLoaded = true;
      }
      , ((err: Error) => {
        console.log(err)
        this.errorMessage = err.message
        this.invalidOwner = true
      })
    )
  }

  getSantizeUrl(url: string | undefined) {
    if (!(url === undefined)) {
      return this._sanitizer.bypassSecurityTrustUrl(url);
    } else {
      return 'https://github.com/nhussein11/blockchain-dashboard/blob/b13b498584fdf45121425edd6bae06cc4b752ecb/src/assets/no_image_available_icon.jpg'
    }

  }

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

    const modalRef = this._modal.open(NftDetailsComponent, { size: 'xl', centered: true, scrollable: true, backdropClass: "modal-backdrop" });

    (<NftDetailsComponent>modalRef.componentInstance).nft = this.selectedNft;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((result) => {
      console.log(result);
    });

    this.selectedNft = {} as Nft;

  }

  favNft(nft: Nft, event:Event) {
    event.stopImmediatePropagation();
    (nft.is_favorite)
    ?
      (
        this._localService.removeData('nftFavs - ' + nft.name?.toString()),
        nft.is_favorite = false
      ) 
    :
      (
        nft.is_favorite = true,
        this._localService.saveData('nftFavs - ' + nft.name?.toString(), JSON.stringify(nft))
      )
  }

}
