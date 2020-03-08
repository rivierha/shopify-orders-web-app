import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  editField: string
  orders = []
  customer: any
  tests: any
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  
  async ngOnInit() {
    let id: any = this.route.snapshot.params.id;
    await this.dataService.getOrder(id).subscribe(async (data: any)=>{
      this.orders.push(data);
      await this.dataService.getCustomer(this.orders[0].customer_id).subscribe((data: any)=>{
        this.customer = data;
      }) 
    })  
    
  }

  async changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    console.log(this.editField)
  }

  async updateList(id: number, property: string, event: any) {
    let data = {
      [property]: this.editField
    }
    await this.dataService.updateCustomer(id, data).pipe(takeUntil(this.destroy$)).subscribe((data: any)=>{
      this.customer = data.customer;
    }) 
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
