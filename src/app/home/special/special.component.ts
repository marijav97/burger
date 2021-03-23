import { Component, OnInit } from '@angular/core';
import { SpecialService } from 'src/app/services/special/special.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  specials;

  constructor(private service: SpecialService) { }

  ngOnInit(): void {
    this.service.getSpecials().subscribe(
      response =>{
        console.log(response);
        this.specials = response;
      },
      error => {
        console.log(error);
      }      
    );
  }

}
