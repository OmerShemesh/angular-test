import { Component, OnInit } from '@angular/core';
import {CustomerCompnent} from './customer.component';
@Component({
    moduleId:__moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives:[CustomerCompnent]
})
export class CustomersComponent implements OnInit {
    
     customers = [
        {id:1,name:"Omer"},
        {id:2,name:"Bla"},
        {id:3,name:"Abc"},
        {id:4,name:"Xyz"},
        {id:4,name:"Cde"}
    ]

    
    constructor() { }

    ngOnInit() { }

}