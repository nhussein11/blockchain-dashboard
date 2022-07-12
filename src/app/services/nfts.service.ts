import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Nft, OwnedNft } from '../models/Nfts';

@Injectable({
  providedIn: 'root'
})
export class NftsService {

  private url = 'https://eth-mainnet.alchemyapi.io/nft/v2/demo/getNFTs';

  constructor(private http: HttpClient) { }

  getNfts(owner: string): Observable<Nft[]> {

    let params = new HttpParams()
      .set('owner', owner);

    let endpoint = `${this.url}`;

    return this.http.get<any>(endpoint, { params })
      .pipe(
        map((res) => {
          return (res.ownedNfts).map(

            (ownedNfts: OwnedNft) => {

              let nft: Nft = ownedNfts.metadata

              if (nft.image?.split('/').includes("v")) { this.isVideo(nft) }

              if (nft.image?.startsWith('ipfs://')) { this.ipfsImage(nft) }

              if (!(Object.keys(nft).length === 0)) { return nft }
              else { return;}
            }
          )
        })
      
        );
  }

  isVideo(nft: Nft): void {
    nft.video = nft.image;
    nft.image = undefined;
  }

  ipfsImage(nft: Nft): void {
    nft.image = 'https://ipfs.io/ipfs' + nft.image?.substring(6);
  }
}
