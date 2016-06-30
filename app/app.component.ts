import {Component} from '@angular/core';
import {CustomerCompnent} from './customer/customer.component';
@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
    directives:[CustomerCompnent]
})
export class AppComponent { 
    title = 'Customer App!!!';
    name = 'Omer';
    color = 'green';

    changeColor(){
        this.color =  (this.color == 'green') ? 'red' : 'green';
    }

    customers = [
        {id:1,name:"Omer"},
        {id:2,name:"Bla"},
        {id:3,name:"Abc"},
        {id:4,name:"Xyz"},
        {id:4,name:"Cde"}
    ]
}
