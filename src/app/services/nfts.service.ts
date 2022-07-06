import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Nft, OwnedNft } from '../models/Nfts';

@Injectable({
  providedIn: 'root'
})
export class NftsService {


  constructor(private http: HttpClient) { }


  getNfts(owner: string): Observable<Nft[]> {
    let url = `https://eth-mainnet.alchemyapi.io/nft/v2/demo/getNFTs/?owner=${owner}`;
  
    return this.http.get<any>(url)
      .pipe(
        map((res) => {
          return (res.ownedNfts).map(
            (ownedNfts: OwnedNft) => {
              let nft: Nft = ownedNfts.metadata

              if (nft.image?.split('/').includes("v")) {
                nft.video = nft.image
                nft.image = undefined
              }

              nft.image?.startsWith('ipfs://')
                ? nft.image = 'https://ipfs.io/ipfs' + nft.image.substring(6)
                : nft.image

              if (!(nft && (Object.keys(nft).length === 0))) {
                return nft
              } else return;
            }
          )
        }));
  }
}
