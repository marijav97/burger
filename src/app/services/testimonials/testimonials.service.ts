import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private service: HttpClient) { }
  
  getTestimonials(){
    var tests = this.service.get("http://localhost:4200/assets/json/testimonials.json");
    return tests;
  }
}
