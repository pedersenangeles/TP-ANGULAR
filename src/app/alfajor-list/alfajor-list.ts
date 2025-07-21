import { Component, OnInit } from '@angular/core';
import { Alfajor } from './Alfajor';
import { AlfajorCart } from '../alfajor-cart';
import { AlfajorData } from '../alfajor-data';

@Component({
  selector: 'app-alfajores-list',
  standalone: false,
  templateUrl: './alfajor-list.html',
  styleUrl: './alfajor-list.scss'
})

export class AlfajoresList implements OnInit {
  alfajores: Alfajor[] = [];

  constructor(
    private cart: AlfajorCart,
    private alfajoresDataService: AlfajorData){
  }

  ngOnInit(): void{
    this.alfajoresDataService.getAll()
    .subscribe(alfajores => this.alfajores = alfajores);
  }

  addToCart(alfajor: Alfajor): void{
    this.cart.addToCart(alfajor);
    alfajor.stock -= alfajor.quantity;
    alfajor.quantity = 0;
  }

  maxReached(m: String){
    alert(m);
  }

}

