import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private service: HttpClient) {}

  getItems(){
    var items = this.service.get("http://localhost:4200/assets/json/menuItems.json");
    return items;
  }
}
