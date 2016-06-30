import { Input,Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-customer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerCompnent implements OnInit {
    @Input() customer:{id:number,name:string};

    constructor() { }

    ngOnInit() { }

}