import { GalleryService } from './../../services/gallery/gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pics;

  constructor(private service: GalleryService) { }

  ngOnInit(): void {
    this.service.getPics().subscribe(
      response =>{
        console.log(response);
        this.pics  = response;
      },
      error => {
        console.log(error);
      }      
    );
  }

}
