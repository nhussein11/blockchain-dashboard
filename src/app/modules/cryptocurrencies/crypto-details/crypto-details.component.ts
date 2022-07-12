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
  cryptoDetailGraphicLoaded:boolean=false;
  id: string = '';
  crypto: CryptocurrencyDetails = {} as CryptocurrencyDetails;

  dataChart = {
    labels: ['2022'],
    datasets: [
      {
        label: 'Percent change 1h',
        backgroundColor: "green",
        data: [0]
      }
      ,{
        label: 'Percent change 24h',
        backgroundColor: "blue",
        data: [0]
      }
      ,{
        label: 'Percent change 7d',
        backgroundColor: "pink",
        data: [0]
      }
      ,{
        label: 'Percent change 30d',
        backgroundColor: "orange",
        data: [0]
      }
      ,{
        label: 'Percent change 60d',
        backgroundColor: "red",
        data: [0]
      }
      ,{
        label: 'Percent change 90d',
        backgroundColor: "grey",
        data: [0]
      }
    ]
  }

  constructor(private route: ActivatedRoute, private _cryptosService: CryptosService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    
    this._cryptosService.getCryptoDetails(this.id).subscribe(
      (respose: CryptocurrencyDetails) => {
        this.crypto = respose;
        this.cryptoDetailLoaded = true;
      },((err)=>{
        console.log('Error');
        console.info(err)
      })
    )

    this._cryptosService.getCryptoDetailsGraphic(this.id).subscribe(
      (respose) => {
        this.dataChart.datasets.forEach(
          ({data},index)=>{
            data[0]=respose[index]*100; 
          }
        )
        
        this.cryptoDetailGraphicLoaded = true;

      },((err)=>{
        console.log('Error');
        console.info(err)
      })
    )

  }
}
