import { Component, OnInit } from '@angular/core';
import { CryptosService } from 'src/app/services/cryptos.service';
import { Cryptocurrency } from 'src/app/models/Cryptocurrency';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-cryptos-component',
  templateUrl: './cryptos-component.component.html',
  styleUrls: ['./cryptos-component.component.css'],
  providers:[CryptosService]
})

export class CryptosComponentComponent implements OnInit {
  cryptosDataLoaded:boolean=false;
  cryptosData:Cryptocurrency[]=[];
  
  p: number = 1;
  count: number = 15;

  searchText:string='';
  
  constructor(private _cryptosService:CryptosService) { }

  ngOnInit(): void {
    this._cryptosService.getCryptos().subscribe(
        (response:Cryptocurrency[]) => {
          this.cryptosData=response;
          this.cryptosDataLoaded=true;
        }
    ) 
  }
}