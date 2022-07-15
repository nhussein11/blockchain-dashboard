import { Component, OnInit } from '@angular/core';
import { CryptosService } from 'src/app/services/cryptos.service';
import { Cryptocurrency } from 'src/app/models/Cryptocurrency';
import { LocalService } from 'src/app/services/local.service';


@Component({
  selector: 'app-cryptos-component',
  templateUrl: './cryptos-component.component.html',

  providers: [CryptosService]
})

export class CryptosComponentComponent implements OnInit {
  cryptosDataLoaded: boolean = false;
  cryptosData: Cryptocurrency[] = [];

  start:number = 1;
  limit:number = 10;

  searchText: string = '';

<<<<<<< HEAD:src/app/cryptocurrencies/cryptos-component/cryptos-component.component.ts
  constructor(private _cryptosService: CryptosService          
    ) { }
=======
  constructor(private _cryptosService: CryptosService) { }
>>>>>>> feature-nfts:src/app/modules/cryptocurrencies/cryptos-component/cryptos-component.component.ts

  ngOnInit(): void {
    this.loadCryptos();
  }

  loadCryptos(){
    this._cryptosService.getCryptos(this.start,this.limit).subscribe(
      (response: Cryptocurrency[]) => {
        this.cryptosData = response;
        this.cryptosDataLoaded = true;
      }
    )
  }

  getNextCryptos(){
    this.cryptosDataLoaded = false;
    this.start +=10;
    this.cryptosData = []
    this.loadCryptos();
  }
<<<<<<< HEAD:src/app/cryptocurrencies/cryptos-component/cryptos-component.component.ts
=======

>>>>>>> feature-nfts:src/app/modules/cryptocurrencies/cryptos-component/cryptos-component.component.ts
  getPreviousCryptos(){
    this.cryptosDataLoaded = false;
    this.start -=10;
    this.cryptosData = []
    this.loadCryptos();
  }
<<<<<<< HEAD:src/app/cryptocurrencies/cryptos-component/cryptos-component.component.ts
=======


>>>>>>> feature-nfts:src/app/modules/cryptocurrencies/cryptos-component/cryptos-component.component.ts
}