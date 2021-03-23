import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private service: HttpClient) { }

  getPics(){
    var pics = this.service.get("http://localhost:4200/assets/json/gallery.json");
    return pics;
  }
}
