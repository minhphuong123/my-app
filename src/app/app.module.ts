import { AdminModule } from './day6/admin.module';

import { Admin2Module } from './admin2/admin2.module';
// import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { SettingTemplateComponent } from './setting-template/setting-template.component';
import { VoteStatusComponent } from './vote-status/vote-status.component';
import { MenuComponent } from './Components/layout/menu/menu.component';
import { BannerComponent } from './Components/layout/banner/banner.component';
import { CategoryComponent } from './Components/layout/category/category.component';
import { FooterComponent } from './Components/layout/footer/footer.component';
import { HomeComponent } from './Components/page/home/home.component';
import { ContactComponent } from './Components/page/contact/contact.component';
import { Day4Component } from './day4/day4.component';
// import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    SettingTemplateComponent,
    VoteStatusComponent,
    MenuComponent,
    BannerComponent,
    CategoryComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    Day4Component,
    // TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    Admin2Module,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
