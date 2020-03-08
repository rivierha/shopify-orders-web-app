import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: Number = 1;
  count: Number = 10;
  orders: any
  dataSource: any
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly router: Router, private readonly dataService: DataService) { }

  displayedColumns = ["order_number", "order_createdAt", "fulfillment_status", "line_items", "total_price_set", "total_discount_set", "email"];

  ngOnInit() {
    this.dataService.getAllOrders().pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.orders = data.items;
      this.dataSource = data.items;
    })
  }

  noOrder() {
    if (this.orders.length == 0) {
      return true
    }
    else {
      return false
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  navigate(data) {
    this.router.navigate([`dashboard/${data}`])
  }

}
