import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent { 
    title = 'Customer App';
    name = 'Omer';
    color = 'blue';

    changeColor(){
        this.color =  (this.color == 'blue') ? 'red' : 'blue';
    }
}
