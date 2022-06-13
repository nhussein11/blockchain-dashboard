import { Component, OnInit } from '@angular/core';
import { CryptosService } from '../cryptos.service';
import { ActivatedRoute } from '@angular/router';
import { Cryptocurrency } from '../Cryptocurrency';
@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {
  

  id:Number=0;
  crypto:Cryptocurrency = {};
  
  constructor(private route:ActivatedRoute,private _cryptosService:CryptosService) { }

  ngOnInit(): void {
    //Cargar los detalles 
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._cryptosService.getCryptoDetails(this.id.toString()).subscribe(
      (response)=> {
        const values = Object.values(response.data)
        Object.values(values).forEach(
          (value) => {
            let data=JSON.parse(JSON.stringify(value))
            console.log(data)
            this.crypto = {
              id: data.id,
              name: data.name,
              symbol: data.symbol,
              category:data.category,
              description:data.description,
              logo:data.logo,
            };
          }
        )
      }
    )
  }

}