import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/exchanges/models/Exchange';
import { Cryptocurrency } from 'src/app/cryptocurrencies/models/Cryptocurrency';

import { Nft } from 'src/app/nfts/models/Nfts';

import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html'
})
export class FavsComponent implements OnInit {

  cryptosFavs:Cryptocurrency[]=[];
  nftsFavs:Nft[]=[];
  exchangesFavs:Exchange[]=[];

  constructor(private _localService : LocalService) { }

  ngOnInit(): void {

    const id = localStorage.getItem('id')
    console.log(id)
    
        
    Object.keys(localStorage).forEach((item : string) => {
    
      if (item.startsWith('cryptoFavs'))    
      { 
        let crypto = JSON.parse((this._localService.getData(item))) as Cryptocurrency ; 
        this.cryptosFavs.push(crypto);
      };
      
      if (item.startsWith('nftFavs'))
      { 
        let nft = JSON.parse(this._localService.getData(item)) as Nft;
        this.nftsFavs.push(nft);
      };
      
      if (item.startsWith('exchangeFavs'))
      { 
        let exchange = JSON.parse(this._localService.getData(item)) as Exchange;
        this.exchangesFavs.push(exchange); 
      };
    
    })

  } 
}