import { Component } from '@angular/core';
import { AlfajorCart } from '../alfajor-cart';
import { Alfajor } from '../alfajor-list/Alfajor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
    cartList$: Observable<Alfajor[]>;
    
    constructor(private cart: AlfajorCart){
      this.cartList$ = cart.cartList.asObservable();
    }
}
