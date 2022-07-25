import { Component, OnInit } from '@angular/core';
import { Cryptocurrency } from 'src/app/models/Cryptocurrency';
import { Exchange } from 'src/app/models/Exchange';
import { Nft } from 'src/app/models/Nfts';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  cryptosFavs:Cryptocurrency[]=[];
  nftsFavs:Nft[]=[];
  exchangesFavs:Exchange[]=[];

  constructor(private _localStorage : LocalService) { }

  ngOnInit(): void {
        
    Object.keys(localStorage).forEach((item : string) => {
    
      if (item.startsWith('cryptoFavs'))    
      { 
        let crypto = JSON.parse((this._localStorage.getData(item))) as Cryptocurrency ; 
        this.cryptosFavs.push(crypto);
      };
      
      if (item.startsWith('nftFavs'))
      { 
        let nft = JSON.parse(this._localStorage.getData(item)) as Nft;
        this.nftsFavs.push(nft);
      };
      
      if (item.startsWith('exchangeFavs'))
      { 
        let exchange = JSON.parse(this._localStorage.getData(item)) as Exchange;
        this.exchangesFavs.push(exchange); 
      };
    
    })

  } 
}