import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  constructor() { }

  // program to generate random strings
  generateString(length: number) {
    let result = ' ';
    const charactersLength = this.characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
