import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopify-orders-app';
  home: boolean = false;

  constructor(private router: Router){}
  
  routeCheck() {
    if (this.router.url == '/dashboard') {
        this.home = true;
    } else { 
      this.home = false;
    }
    return this.home;
  }

  logout(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {

  }
}