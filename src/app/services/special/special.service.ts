import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor(private service: HttpClient) { }

  getSpecials(){
    var specials =  this.service.get("http://localhost:4200/assets/json/specials.json");
    return specials;
  }
}
