import { Component, OnInit } from '@angular/core';
import {CustomerCompnent} from './customer.component';
import {CustomerService} from './customer.service';
import { Observable } from 'rxjs/Rx';

import '../db.api.js';
@Component({
    moduleId:module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives:[CustomerCompnent],
    providers:[CustomerService]
})
export class CustomersComponent implements OnInit {
    
    //customers:Promise<any[]>;
    customers:any[];
    constructor(private _customerService:CustomerService) { 
      
    }

    ngOnInit() { 
         this._customerService.getCustomers_RxObservable()
            .subscribe(
                (customers)=>this.customers=customers,
                (err) => {
                    console.log(err);
                });
    }

}