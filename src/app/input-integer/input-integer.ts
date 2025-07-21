import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Alfajor } from '../alfajor-list/Alfajor';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})

export class InputInteger {
  
  @Input() 
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();
  
  upQuantity():void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Se alcanzó el max.");
    }
  }
  
  downQuantity():void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}
