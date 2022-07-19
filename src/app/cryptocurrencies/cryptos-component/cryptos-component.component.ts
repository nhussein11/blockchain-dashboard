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
        this._localService.removeData(crypto.id.toString()),
        crypto.is_favorite = false
      ) 
    :
      (
        crypto.is_favorite = true,
        this._localService.saveData(crypto.id.toString(), JSON.stringify(crypto))
      )
  }
}