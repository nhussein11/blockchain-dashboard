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
        
        this.nfts = response.filter (nft => nft !== undefined)
        
        this.nftsDataLoaded = true;

        
      }
    );
    
  }

  searchNftsByContract(newOwner: string) {
    

    !newOwner
      ?
      (
        this.emptyOwner = true,
        this.nftsDataLoaded = true,
        this.owner = '')
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
