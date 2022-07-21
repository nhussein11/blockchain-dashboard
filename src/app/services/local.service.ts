import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  key = "123";

  constructor() { }

  public clearData() {
    localStorage.clear();
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || "";
    data = this.decrypt(data);
    return data;
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }


  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}
