import { TestimonialsService } from './../../services/testimonials/testimonials.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  tests;

  constructor(private service: TestimonialsService) { }

  ngOnInit(): void {
    this.service.getTestimonials().subscribe(
      response =>{
        console.log(response);
        this.tests = response;
      },
      error => {
        console.log(error);
      }      
    );
  }

}
