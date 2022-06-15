import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cryptocurrency } from '../models/Cryptocurrency';

@Injectable({
  providedIn: 'root'
})

export class CryptosService {
  
  HEADERS = {
    //My own key; 
    'X-CMC_PRO_API_KEY': 'b61a8fc1-81dc-4ab2-8fa5-475d5ddf4e08',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin':'*'
  }

  constructor(private http: HttpClient) { }

  getCryptos():Observable<any>{
    let url = '/v1/cryptocurrency/listings/latest';
    
    return this.http.get<any>(url,
        { headers: this.HEADERS }
      );
  }
  
  getCryptoDetails(id:string):Observable<any>{
    let url = '/v1/cryptocurrency/info?id='+id.toString();
    
    return this.http.get<any>(url,
        { headers: this.HEADERS }
      );
  }
  

}
