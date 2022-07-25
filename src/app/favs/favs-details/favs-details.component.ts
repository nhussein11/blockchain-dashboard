import { Component, Input, OnInit } from '@angular/core';
import { Cryptocurrency } from 'src/app/models/Cryptocurrency';
import { Exchange } from 'src/app/models/Exchange';
import { Nft } from 'src/app/models/Nfts';
import { LocalService } from 'src/app/services/local.service';

import { is } from 'typescript-is';

@Component({
  selector: 'app-favs-details',
  templateUrl: './favs-details.component.html',
  styleUrls: ['./favs-details.component.css']
})
export class FavsDetailsComponent  {

  @Input() data: Cryptocurrency[] | Nft[] | Exchange[] = [];

  constructor(private _localService: LocalService) { }

  deleteFav(element: any) : void {
    
    const index = this.data.indexOf(element)
    this.data.splice(index,1)

    if(this.instanceOfCryptocurrency(element)){
      this._localService.removeData('cryptoFavs - '+element.id)
    }
    else if(this.instanceOfNft(element)){
      this._localService.removeData('nftFavs - '+ element.name)
    }
    else if(this.instanceOfExchange(element)){
      this._localService.removeData('exchangeFavs - '+element.id)
    }
  }



  private instanceOfCryptocurrency(element: any): element is Cryptocurrency {
    return 'max_supply' in element;
  }
  private  instanceOfNft(element: any): element is Nft {
    return 'name' in element; // to improve
  }
  private instanceOfExchange(element: any): element is Exchange {
    return 'year_established' in element;
  }

}
