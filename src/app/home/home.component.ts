import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../services/items.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items;

  constructor(private service: ItemsService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe(
      response =>{
        console.log(response);
        this.items  = response;
      },
      error => {
        console.log(error);
      }      
    );
  }
}
