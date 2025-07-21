import { Injectable } from '@angular/core';
import { Alfajor } from './alfajor-list/Alfajor';
import { BehaviorSubject } from 'rxjs';

//Maneja la logica del carrito

@Injectable({
  providedIn: 'root'
})
export class AlfajorCart {
  private _cartList: Alfajor[] = [];
  cartList: BehaviorSubject<Alfajor[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(alfajor:Alfajor){
    let item = this._cartList.find((v1) => v1.name == alfajor.name);
    if(!item){
       this._cartList.push({... alfajor});
    }else{
      item.quantity += alfajor.quantity; 
    }
    this.cartList.next(this._cartList);
  }

}
