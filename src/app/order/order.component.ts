import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  
  async ngOnInit() {
    let id: any = this.route.snapshot.params.id;
    console.log(id, 'ID')
    await this.dataService.getOrder(id).subscribe(async (data: any)=>{
      console.log(data, '1');
      this.orders.push(data);
      // this.tests = this.order.line_items
      // console.log(this.tests, 'D')
      await this.dataService.getCustomer(this.orders[0].customer_id).subscribe((data: any)=>{
        console.log(data, '2');
        this.customer = data;
      }) 
    })  
    
  }

  async changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    console.log(this.editField)
  }

  async updateList(id: number, property: string, event: any) {
    // const editField = event.target.textContent;
    console.log("Fuck")
    let data = {
      [property]: this.editField
    }
    await this.dataService.updateCustomer(id, data).subscribe((data: any)=>{
      console.log(data, '2');
      this.customer = data.customer;
    }) 
    // this.customer[property] = this.editField;
    // console.log(this.customer[property])
    console.log(this.customer)
  }

}
