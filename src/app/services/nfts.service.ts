import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { Nft, OwnedNft } from '../models/Nfts';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class NftsService {

  private url = 'https://eth-mainnet.alchemyapi.io/nft/v2/demo/getNFTs';

  constructor(private http: HttpClient, private _localService: LocalService) { }

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

              if (nft.image?.startsWith('data')) { this.base64Image(nft) }

              if (this.getNftFav(nft.name)) {nft.is_favorite=true}

              if (!(Object.keys(nft).length === 0)) { return nft }
              else { return; }
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


  base64Image(nft: Nft): void {
    let dataURI = nft.image || '';
    let blob = this.dataURItoBlob(dataURI);
    let objectURL = URL.createObjectURL(blob);
    nft.image = objectURL

  }


  dataURItoBlob(dataURI: string) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  }

  
  getNftFav(name: string | undefined) {
    return this._localService.getData('nftFavs - ' + name);
  }

}
