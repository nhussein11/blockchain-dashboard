import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Exchange } from 'src/app/models/Exchange';
import { ExchangesService } from 'src/app/services/exchanges.service';

@Component({
  selector: 'app-exchanges-component',
  templateUrl: './exchanges-component.component.html',
  styleUrls: ['./exchanges-component.component.css']
})
export class ExchangesComponentComponent implements OnInit {

  exchanges: Exchange[] = [];

  searchText:string='';

  

  constructor(private _exchangesService: ExchangesService) { }


  ngOnInit(): void {

    this._exchangesService.getExchanges().subscribe(
      (response: Exchange[]) => {
        this.exchanges = response;
      }, ((err)=>{
        console.log('Error')
        console.info(err)
      })
    );
  }


  

}
