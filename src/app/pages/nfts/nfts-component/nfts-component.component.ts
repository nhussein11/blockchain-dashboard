import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Nft, OwnedNft } from 'src/app/models/Nfts';
import { NftDetailsComponent } from 'src/app/pages/nfts/nft-details/nft-details.component'
import { NftsService } from 'src/app/services/nfts.service';
// import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-nfts-component',
  templateUrl: './nfts-component.component.html',
  styleUrls: ['./nfts-component.component.css']
})
export class NftsComponentComponent implements OnInit {

  nftsDataLoaded: boolean = false;
  nfts: Nft[] = [];
  selectedNft: Nft = {} as Nft;
  owner: string = '0xfae46f94ee7b2acb497cecaff6cff17f621c693d';
  emptyOwner: boolean = false;
  nftIsSelected: boolean = false;
  // owner: string ='0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  defaultImage: string = 'src/assets/no_image_available_icon.jpg';


  constructor(private _nftService: NftsService,
    private modal: NgbModal,

  ) { }

  ngOnInit(): void {
    this.loadNfts(this.owner);
  }


  loadNfts(owner: string) {
    this.nfts=[]
    this._nftService.getNfts(owner).subscribe(
      (response: Nft[]) => {
        this.nfts = response.filter (nft => nft !== undefined);


        this.nfts.forEach((nft)=>{
          if(nft.image?.startsWith('data')){
            // console.log(nft.image)
            console.log(nft.image.split(',')[1])
            // nft.image = this.unicodeBase64Decode(nft.image.split(',')[1])
            console.log(

              this.unicodeBase64Decode(nft.image.split(',')[1])
            )
             
            
            // console.log(this.unicodeBase64Decode(nft.image))
            
          }
          
          
        })



        this.nftsDataLoaded = true;
      }
    );
  }
 unicodeBase64Decode(text : string ){
    text = text.replace(/\s+/g, '').replace(/\-/g, '+').replace(/\_/g, '/');
    // console.log(text)
    
    return decodeURIComponent(Array.prototype.map.call(window.atob(text),function(c){return'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2);}).join(''));
}

  searchNftsByContract(newOwner: string) {
    !newOwner
      ?
      (
        this.emptyOwner = true,
        this.nftsDataLoaded = true,
        this.owner = ''
      )
      :
        this.emptyOwner = false
        this.nfts = [],
        this.loadNfts(newOwner);
  }

  isEmptyNft(nft: Nft) {
    return (nft && (Object.keys(nft).length === 0));
  }


  openNftDetails(nft: Nft) {
    console.log(nft.image)

    this.selectedNft = nft;

    const modalRef = this.modal.open(NftDetailsComponent, { size: 'xl', centered: true, scrollable: true, backdropClass: "modal-backdrop" });

    (<NftDetailsComponent>modalRef.componentInstance).nft = this.selectedNft;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((result) => {
      console.log(result);
    });

    this.selectedNft = {};

  }
}
