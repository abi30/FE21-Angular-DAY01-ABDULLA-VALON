import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ReadmoreComponent } from './readmore/readmore.component';



const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "about",
    pathMatch: "full",
    component: AboutComponent
  },
  {
    path: "contact",component: ContactComponent
  },
  {
    path:"carousel",component:CarouselComponent
  },{
    path:"readmore",component:ReadmoreComponent


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
