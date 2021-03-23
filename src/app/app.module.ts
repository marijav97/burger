import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './home/slider/slider.component';
import { SpecialComponent } from './home/special/special.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { GalleryComponent } from './about/gallery/gallery.component';

import { ItemsService } from './services/items.service';
import { SpecialService } from './services/special/special.service';
import { TestimonialsService } from './services/testimonials/testimonials.service';
import { GalleryService } from './services/gallery/gallery.service';
import { ZippyComponent } from './zippy/zippy.component';


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'menu',component:MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    SliderComponent,
    SpecialComponent,
    TestimonialsComponent,
    GalleryComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemsService,
    SpecialService,
    TestimonialsService,
    GalleryService
  ],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent, HomeComponent, MenuComponent, AboutComponent, ContactComponent, SpecialComponent, TestimonialsComponent, GalleryComponent]
})
export class AppModule { }
