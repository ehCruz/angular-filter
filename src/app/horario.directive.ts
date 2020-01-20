import { Directive, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appHorario]'
})
export class HorarioDirective {

  constructor(private ngModel: NgModel) { }

  @HostListener('keyup', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    const value = this.ngModel.model + '123';
    this.ngModel.update.emit(value);
  }

}
