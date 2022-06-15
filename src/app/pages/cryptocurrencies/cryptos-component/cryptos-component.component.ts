import { Component, OnInit } from '@angular/core';
import { CryptosService } from 'src/app/services/cryptos.service';
import { Cryptocurrency } from 'src/app/models/Cryptocurrency';

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
          console.log(response)

          //this.cryptosData.push(crypto)
  
        }
    ) 
  }
}