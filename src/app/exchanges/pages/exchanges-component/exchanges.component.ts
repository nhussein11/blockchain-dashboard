import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

import { LocalService } from 'src/app/services/local.service';
import { Exchange } from '../../models/Exchange';

import { ExchangesService } from '../../services/exchanges.service';

@Component({
  selector: 'app-exchanges-component',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {

  exchanges: Exchange[] = [];

  perPage: number = 8;
  page: number = 1;

  scrollHeight: number = 500;
  showButton: boolean = false;

  searchText: string = '';

  exchangesLoaded: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _exchangesService: ExchangesService,
    private _localService: LocalService
    ) { }


  ngOnInit(): void {
    this.loadExchanges(this.perPage, this.page);
  }

  loadExchanges(perPage: number, page: number) {
    this._exchangesService.getExchanges(perPage, page).subscribe(
      (response: Exchange[]) => {
        this.exchanges = this.exchanges.concat(response);
        this.exchangesLoaded = true;
      }, ((err) => {
        console.log('Error')
        console.info(err)
      })
    );
  }

  scollDown(): void {
    this.page += 1;
    this.loadExchanges(this.perPage, this.page);
  }

  scrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;

    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  favExchange(exchange:Exchange, event:Event){
    event.stopImmediatePropagation();
    (exchange.is_favorite)
    ?
      (
        this._localService.removeData('exchangeFavs - ' + exchange.id.toString()),
        exchange.is_favorite = false
      ) 
    :
      (
        exchange.is_favorite = true,
        this._localService.saveData('exchangeFavs - ' + exchange.id.toString(), JSON.stringify(exchange))
      )
  }
  
}
