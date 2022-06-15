import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptosService {

  constructor(private _httpClient: HttpClient) { }

  getCryptos():Observable<any>{
    let url = '/v1/cryptocurrency/listings/latest';
    // let url ='https://jsonplaceholder.typicode.com/todos';
    return this._httpClient.get<any>(url,
        {
          headers: {
                  //My own key; 
                  'X-CMC_PRO_API_KEY': 'b61a8fc1-81dc-4ab2-8fa5-475d5ddf4e08',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin':'*'
                }
        }
      );
  }
  getCryptoDetails(id:string):Observable<any>{
    let url = '/v1/cryptocurrency/info?id='+id.toString();
    // let url ='https://jsonplaceholder.typicode.com/todos';
    return this._httpClient.get<any>(url,
        {
          headers: {
                  //My own key; 
                  'X-CMC_PRO_API_KEY': 'b61a8fc1-81dc-4ab2-8fa5-475d5ddf4e08',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin':'*'
                }
        }
      );
  }
  

}
