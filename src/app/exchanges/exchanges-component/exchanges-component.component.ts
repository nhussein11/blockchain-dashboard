import { DOCUMENT } from '@angular/common';
import { Component, Host, HostListener, Inject, OnInit } from '@angular/core';
import { Exchange } from 'src/app/models/Exchange';
import { ExchangesService } from 'src/app/services/exchanges.service';

@Component({
  selector: 'app-exchanges-component',
  templateUrl: './exchanges-component.component.html',
  styleUrls: ['./exchanges-component.component.css']
})
export class ExchangesComponentComponent implements OnInit {

  exchanges: Exchange[] = [];

  perPage: number = 8;
  page: number = 1;

  scrollHeight: number = 500;
  showButton: boolean = false;

  searchText: string = '';

  exchangesLoaded: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _exchangesService: ExchangesService) { }


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
}
