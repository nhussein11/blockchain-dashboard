import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Nft } from '../models/Nfts';

@Injectable({
  providedIn: 'root'
})
export class NftsService {


  constructor(private http: HttpClient) { }


  getNfts():Observable<Nft[]>{
      let url = 'https://api.opensea.io/api/v1/collections?offset=0&limit=300';
      // let url = 'https://api.opensea.io/api/v1/collections';

      let alternativeUrl = 'https://eth-mainnet.alchemyapi.io/nft/v2/demo/getNFTs/?owner=0xfae46f94ee7b2acb497cecaff6cff17f621c693d';
      
      return this.http.get<any>(url)
      .pipe(
        map((res) => res.collections)
      )
      ;
    
  }



}
