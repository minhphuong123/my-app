import { Day6Component } from './day6/day6/day6.component';
import { HomeComponent } from './Components/page/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './Components/page/contact/contact.component';
import { CategoryComponent } from './Components/layout/category/category.component';

const routes: Routes = [
  {path:'day6', component:Day6Component},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
