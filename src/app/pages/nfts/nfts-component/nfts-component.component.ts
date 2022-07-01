import { Component, OnInit } from '@angular/core';
import { Nft, OwnedNft } from 'src/app/models/Nfts';
import { NftsService } from 'src/app/services/nfts.service';

@Component({
  selector: 'app-nfts-component',
  templateUrl: './nfts-component.component.html',
  styleUrls: ['./nfts-component.component.css']
})
export class NftsComponentComponent implements OnInit {


  nfts: Nft[] = [];
  
  // p: number = 1;
  // count: number = 3;

  constructor(private _nftService: NftsService) { }

  ngOnInit(): void {


    this._nftService.getNfts().subscribe(
      (response:Nft[]) => {
        // console.log(response)
        
        this.nfts = response
      }
        

    );
    console.log(this.nfts)

  }
}
