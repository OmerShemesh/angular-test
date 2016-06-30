import { Input,Component, OnInit } from '@angular/core';

@Component({
    moduleId:__moduleName,
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerCompnent implements OnInit {
    @Input() customer:{id:number,name:string};

    color = 'green';

    changeColor(){
        this.color =  (this.color == 'green') ? 'red' : 'green';
    }
    constructor() { }

    ngOnInit() { }

}