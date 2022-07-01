import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Nft, OwnedNft } from '../models/Nfts';

@Injectable({
  providedIn: 'root'
})
export class NftsService {


  constructor(private http: HttpClient) { }


  getNfts(owner:string): Observable<Nft[]> {
    
    

    let url = `https://eth-mainnet.alchemyapi.io/nft/v2/demo/getNFTs/?owner=${owner}`;

    return this.http.get<any>(url)
      .pipe(
        map((res) => {
         return  (res.ownedNfts).map(
           (nft:OwnedNft)=> nft.metadata
          )
        })
      );
  }
}
