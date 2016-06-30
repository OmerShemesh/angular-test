import { Input,Component, OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerCompnent implements OnInit {
    @Input() customer:{id:number,name:string};

    color = 'green';

    constructor() { }

    ngOnInit() { }

}