import { Component, OnInit } from '@angular/core';
import { CryptosService } from 'src/app/services/cryptos.service';
import { ActivatedRoute } from '@angular/router';
import { Cryptocurrency, CryptocurrencyDetailsGraphic } from 'src/app/models/Cryptocurrency';
import { CryptocurrencyDetails } from 'src/app/models/Cryptocurrency-Details';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

  cryptoDetailLoaded: boolean = false;
  id: string = '';
  crypto: CryptocurrencyDetails = {} as CryptocurrencyDetails;

  dataChart = {
    labels: ['2022'],
    datasets: [
      {
        label: 'Percent change 1h',
        data: [0]
      },
      {
        label: 'Percent change 24h',
        data: [0]
      },
      {
        label: 'Percent change 7d',
        data: [0]
      },
      {
        label: 'Percent change 30d',
        data: [0]
      },
      {
        label: 'Percent change 60d',
        data: [0]
      },
      {
        label: 'Percent change 90d',
        data: [0]
      },
    ]
  }


  constructor(private route: ActivatedRoute, private _cryptosService: CryptosService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')!;
    this._cryptosService.getCryptoDetails(this.id).subscribe(
      (respose: CryptocurrencyDetails) => {
        this.crypto = respose;
        this.cryptoDetailLoaded = true;
      }
    )
    this._cryptosService.getCryptoDetailsGraphic(this.id).subscribe(
      (respose) => {

        this.dataChart.datasets.forEach(
          (dataset,index)=>{
            dataset.data[0]=respose[index]*100
          }
        )
      }

    )
  }

}
