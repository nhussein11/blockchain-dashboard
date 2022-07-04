import { Component, OnInit } from '@angular/core';
import { Nft, OwnedNft } from 'src/app/models/Nfts';
import { NftsService } from 'src/app/services/nfts.service';
// import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-nfts-component',
  templateUrl: './nfts-component.component.html',
  styleUrls: ['./nfts-component.component.css']
})
export class NftsComponentComponent implements OnInit {


  nfts: Nft[] = [];
  owner: string = '0xfae46f94ee7b2acb497cecaff6cff17f621c693d';
  emptyOwner:boolean=false;
  // owner: string ='0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';
  defaultImage: string = 'src/assets/no_image_available_icon.jpg';

  // decodedImage = new Image();

  constructor(private _nftService: NftsService,
    // private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.loadNfts(this.owner);
  }


  loadNfts(owner: string) {
    this._nftService.getNfts(owner).subscribe(
      (response: Nft[]) => {

        response.map(
          (nft: Nft) => {
            nft.image?.startsWith('ipfs://')
              ? nft.image = 'https://ipfs.io/ipfs' + nft.image.substring(6)
              : nft.image

            // if (nft.image?.startsWith('data:')) {
            // }
          }
        )
        this.nfts = response
      }
    );
  }

  searchNftsByContract(newOwner: string) {
    
    ! newOwner 
    ? 
      (this.emptyOwner=true, 
      this.owner='')
    : 
      this.nfts = [],
      console.log(newOwner),
      this.loadNfts(newOwner);
  }

  isEmptyNft(nft: Nft) {
    return (nft && (Object.keys(nft).length === 0));
  }

  // convertDataUrlToBlob(image: string): Blob {
  //   const arr = image.split(',');
  //   // const mime = arr[0].match(/:(.*?);/)[1];
  //   const mime = 'svg';
  //   const bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   const u8arr = new Uint8Array(n);

  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }


  //   return new Blob([u8arr], { type: mime });
  // }


  // decode64(img: string){
  //   let decode = atob(img.substring(26))
  //   return (decode)
  // }

}
