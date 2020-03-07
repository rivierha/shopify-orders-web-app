import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: Number = 1;
  count: Number = 10;
  orders : any
  constructor(private readonly router:Router, private readonly dataService: DataService) {
   
   }

  ngOnInit() {
    this.dataService.getAllOrders().subscribe((data: any)=>{
      console.log(data, '3');
      this.orders = data.items;
    })  
  }

  noOrder(){
    if(this.orders.length==0){
      return true
    }
    else{
      return false
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

  navigate(data){
    this.router.navigate([`dashboard/${data}`])
  }
 
}
