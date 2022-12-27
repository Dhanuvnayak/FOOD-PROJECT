import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  [x: string]: any;

  constructor() { }

  log(message: string){
    console.log(message);
  }
}
