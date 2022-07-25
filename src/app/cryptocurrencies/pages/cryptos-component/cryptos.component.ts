import { Component, OnInit } from '@angular/core';

import { Cryptocurrency } from 'src/app/cryptocurrencies/models/Cryptocurrency';
import { LocalService } from 'src/app/services/local.service';
import { CryptosService } from '../../services/cryptos.service';


@Component({
  selector: 'app-cryptos-component',
  templateUrl: './cryptos.component.html',

  providers: [CryptosService]
})

export class CryptosComponent implements OnInit {
  cryptosDataLoaded: boolean = false;
  cryptosData: Cryptocurrency[] = [];

  start: number = 1;
  limit: number = 10;

  searchText: string = '';

  constructor(private _cryptosService: CryptosService,
    private _localService: LocalService
  ) { }

  ngOnInit(): void {
    this.loadCryptos();
  }

  loadCryptos() {
    this._cryptosService.getCryptos(this.start, this.limit).subscribe(
      (response: Cryptocurrency[]) => {
        this.cryptosData = response;
        this.cryptosDataLoaded = true;
      }
    )
  }

  getNextCryptos() {
    this.cryptosDataLoaded = false;
    this.start += 10;
    this.cryptosData = []
    this.loadCryptos();
  }
  getPreviousCryptos() {
    this.cryptosDataLoaded = false;
    this.start -= 10;
    this.cryptosData = []
    this.loadCryptos();
  }

  favCrypto(crypto: Cryptocurrency) {
    (crypto.is_favorite)
    ?
      (
        this._localService.removeData('cryptoFavs - ' + crypto.id.toString()),
        crypto.is_favorite = false
      ) 
    :
      (
        crypto.is_favorite = true,
        this._localService.saveData('cryptoFavs - ' + crypto.id.toString(), JSON.stringify(crypto))
      )
  }
}