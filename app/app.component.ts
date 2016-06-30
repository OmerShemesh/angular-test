import {Component} from '@angular/core';
import {CustomersComponent} from './customer/customers.component';



@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl:'app.component.html',
    directives:[CustomersComponent],
   
   
})
export class AppComponent { 
    title = 'Customer App';
    name = 'Omer';
    color = 'red';

    changeColor(){
        this.color =  (this.color == 'green') ? 'red' : 'green';
    }
}
