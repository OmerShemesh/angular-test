import {Component} from '@angular/core';
import {CustomersComponent} from './customer/customers.component';
@Component({
    moduleId:__moduleName,
    selector: 'my-app',
    templateUrl:'app.component.html',
    directives:[CustomersComponent]
   
})
export class AppComponent { 
    title = 'Customer App!!!';
    name = 'Omer';
}
