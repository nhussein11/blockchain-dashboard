import { Component, Input, OnInit } from '@angular/core';
import { Cryptocurrency } from 'src/app/models/Cryptocurrency';
import { Exchange } from 'src/app/models/Exchange';
import { Nft } from 'src/app/models/Nfts';

@Component({
  selector: 'app-favs-details',
  templateUrl: './favs-details.component.html',
  styleUrls: ['./favs-details.component.css']
})
export class FavsDetailsComponent implements OnInit {

  @Input() data:Cryptocurrency[] | Nft[] | Exchange [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
