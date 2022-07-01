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
      // let url = 'https://api.opensea.io/api/v1/collections?offset=0&limit=300';
      let url = 'https://api.opensea.io/api/v1/collections';
      
      return this.http.get<any>(url)
      .pipe(
        map((res) => res.collections)
      )
      ;
    
  }



}
