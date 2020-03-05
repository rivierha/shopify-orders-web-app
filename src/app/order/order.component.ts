import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  editField: string
  constructor() { }
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
  ];
  billing_address = {
    first_name: "Bob",
    address1: "123 Billing Street",
    phone: "555-555-BILL",
    city: "Billtown",
    zip: "K2P0B0",
    province: "Kentucky",
    country: "United States",
    last_name: "Biller",
    address2: null,
    company: "My Company",
    latitude: null,
    longitude: null,
    name: "Bob Biller",
    country_code: "US",
    province_code: "KY"
  }
  shipping_address = {
    first_name: "Steve",
    address1: "123 Shipping Street",
    phone: "555-555-SHIP",
    city: "Shippington",
    zip: "40003",
    province: "Kentucky",
    country: "United States",
    last_name: "Shipper",
    address2: null,
    company: "Shipping Company",
    latitude: null,
    longitude: null,
    name: "Steve Shipper",
    country_code: "US",
    province_code: "KY"
  }

  customer = {
    id: 115310627314723950,
    email: "john@test.com",
    first_name: "John",
    last_name: "Smith",
    phone: "NA",
    default_address: {
      id: 715243470612851200,
      customer_id: 115310627314723950,
      first_name: null,
      last_name: null,
      company: null,
      address1: "123 Elm St.",
      address2: "NA",
      city: "Ottawa",
      province: "Ontario",
      country: "Canada",
      zip: "K2H7A8",
      phone: "123-123-1234",
      name: "",
      province_code: "ON",
      country_code: "CA",
      country_name: "Canada",
      default: true
    }
  }

  items = [{
    id: 866550311766439000,
    variant_id: 808950810,
    title: "IPod Nano - 8GB",
    quantity: 1,
    sku: "IPOD2008PINK",
    variant_title: null,
    vendor: null,
    fulfillment_service: "manual",
    product_id: 632910392,
    requires_shipping: true,
    taxable: true,
    gift_card: false,
    name: "IPod Nano - 8GB",
    variant_inventory_management: "shopify",
    properties: [],
    product_exists: true,
    fulfillable_quantity: 1,
    grams: 567,
    fulfillment_status: null,
    price_set: {
      shop_money: {
        amount: "199.00",
        currency_code: "USD"
      },
      presentment_money: {
        amount: "199.00",
        currency_code: "USD"
      }
    },
    total_discount_set: {
      shop_money: {
        amount: "0.00",
        currency_code: "USD"
      },
      presentment_money: {
        amount: "0.00",
        currency_code: "USD"
      }
    },
  },
  {
    id: 141249953214522980,
    variant_id: 808950810,
    title: "IPod Nano - 8GB",
    quantity: 1,
    sku: "IPOD2008PINK",
    variant_title: null,
    vendor: null,
    fulfillment_service: "manual",
    product_id: 632910392,
    requires_shipping: true,
    name: "IPod Nano - 8GB",
    variant_inventory_management: "shopify",
    properties: [],
    product_exists: true,
    fulfillable_quantity: 1,
    grams: 567,
    fulfillment_status: null,
    price_set: {
      shop_money: {
        amount: "199.00",
        currency_code: "USD"
      },
      presentment_money: {
        amount: "199.00",
        currency_code: "USD"
      }
    },
    total_discount_set: {
      shop_money: {
        amount: "5.00",
        currency_code: "USD"
      },
      presentment_money: {
        amount: "5.00",
        currency_code: "USD"
      }
    }
  }
  ]
  ngOnInit() {
  }

  changeValue(id: number, property: string, event: any) {

    this.editField = event.target.textContent;
    console.log(this.editField)
  }

  updateList(id: number, property: string, event: any) {
    console.log(this.editField, 'A')
    // const editField = event.target.textContent;
    this.customer[property] = this.editField;
    console.log(this.customer[property])
    console.log(this.customer)
  }

}
