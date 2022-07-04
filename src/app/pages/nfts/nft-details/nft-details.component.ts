import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Nft } from 'src/app/models/Nfts';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css']
})
export class NftDetailsComponent implements OnInit {

  nft: Nft = {} as Nft;
  data: string = '';

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.data = this._route.snapshot.paramMap.get('data')!;
    this.nft = JSON.parse(this.data);

  }

}
