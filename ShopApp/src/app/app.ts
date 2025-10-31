import { Component } from '@angular/core';
import { FooterComponent } from './core/components/footer/footer';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core-module';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[
    FooterComponent,
    HttpClientModule,
    CoreModule,
    CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'ShopApp';
}
