import { Component, OnInit } from '@angular/core';
import { CryptosService } from '../cryptos.service';
import { Cryptocurrency } from '../Cryptocurrency';

@Component({
  selector: 'app-cryptos-component',
  templateUrl: './cryptos-component.component.html',
  styleUrls: ['./cryptos-component.component.css'],
  providers:[CryptosService]
})

export class CryptosComponentComponent implements OnInit {
  
  cryptosData:Cryptocurrency[]=[];
  
  constructor(private _cryptosService:CryptosService) { }

  ngOnInit(): void {
    this._cryptosService.getCryptos().subscribe(response=>{
      const values = Object.values(response.data)
      Object.values(values).forEach(
        
        (value) => {
          //console.log(value)
          let data=JSON.parse(JSON.stringify(value))
          
          let crypto:Cryptocurrency = {
            id: data.id,
            name: data.name,
            symbol: data.symbol,
            price: data.quote.USD.price,
            maxSuply: data.max_supply
          };

          this.cryptosData.push(crypto)
  
        }
      );   
      }
    );
  }
}