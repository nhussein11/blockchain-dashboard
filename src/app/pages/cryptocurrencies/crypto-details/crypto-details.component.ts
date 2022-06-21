import { Component, OnInit } from '@angular/core';
import { CryptosService } from 'src/app/services/cryptos.service';
import { ActivatedRoute } from '@angular/router';
import { Cryptocurrency } from 'src/app/models/Cryptocurrency';
import { CryptocurrencyDetails } from 'src/app/models/Cryptocurrency-Details';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {


  id: string = '';
  
  // crypto: CryptocurrencyDetails = {
  //   category: '',
  //   description: '',
  //   logo: '',
  //   id: 0,
  //   name: '',
  //   symbol: '',
  // };

  crypto: CryptocurrencyDetails = {} as CryptocurrencyDetails;

  constructor(private route: ActivatedRoute, private _cryptosService: CryptosService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')!;
    this._cryptosService.getCryptoDetails(this.id).subscribe(
      (respose:CryptocurrencyDetails) => {
        console.log(respose.urls.source_code)
        this.crypto = respose
      } 
    )
  }

}
