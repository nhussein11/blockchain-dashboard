import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cryptocurrency,CryptocurrencyDetailsGraphic } from '../models/Cryptocurrency';
import { CryptocurrencyDetails } from '../models/Cryptocurrency-Details';



@Injectable({
  providedIn: 'root'
})

export class CryptosService {
  
  private HEADERS = {
    //My own key; 
    'X-CMC_PRO_API_KEY': 'b61a8fc1-81dc-4ab2-8fa5-475d5ddf4e08',
    'Accept': 'application/json',
    // 'Accept-Encoding': 'deflate, gzip',
    'Access-Control-Allow-Origin':'*'
  }

  constructor(private http: HttpClient) { }

  getCryptos():Observable<Cryptocurrency[]>{
    let url = '/v1/cryptocurrency/listings/latest';
    
    return this.http.get<any>(url,
      { headers: this.HEADERS, observe:'response' })
        .pipe(
          map( (resp ) =>  resp.body.data)
        );
  }
  
  getCryptoDetails(id:string):Observable<CryptocurrencyDetails>{
    let url = '/v1/cryptocurrency/info?id='+id;
    
    return this.http.get<any>(url,
        { headers: this.HEADERS, observe:'response' })
        .pipe(
          map( (resp ) => resp.body.data[id])
        );
    }

    getCryptoDetailsGraphic(id:string):Observable<number[]>{
      let url = '/v1/cryptocurrency/quotes/latest?id='+id;
      // let auxObj={}
      let cryptoPercetages:number[]=[];
      return this.http.get<any>(url,
          { headers: this.HEADERS, observe:'response' })
          .pipe(
            map( (resp ) => {
              
              cryptoPercetages.push(resp.body.data[id].quote.USD.percent_change_1h); 
              cryptoPercetages.push(resp.body.data[id].quote.USD.percent_change_24h);
              cryptoPercetages.push(resp.body.data[id].quote.USD.percent_change_7d); 
              cryptoPercetages.push(resp.body.data[id].quote.USD.percent_change_30d);
              cryptoPercetages.push(resp.body.data[id].quote.USD.percent_change_60d);
              cryptoPercetages.push(resp.body.data[id].quote.USD.percent_change_90d);
              // console.log(cryptoPercetages)
              return cryptoPercetages
            }
            // resp.body.data[id]
            )
          );
      }

    
  }
