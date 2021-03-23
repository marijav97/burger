import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../services/items.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

  onSubmit(form:NgForm){
    console.log(form)
  }
}
