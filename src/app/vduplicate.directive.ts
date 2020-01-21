import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appVduplicate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: VduplicateDirective, multi: true }]
})
export class VduplicateDirective implements Validator {

  @Input('appVduplicate') appVduplicate: {values: Array<any>, key: string };

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validateForDuplicate(control);
  }

  private validateForDuplicate(c: AbstractControl): { isDuplicado: { valid: boolean } } | null {
    if(this.appVduplicate.values.length > 0) {
      const element = this.appVduplicate.values.find(el => el[this.appVduplicate.key] === c.value);
      if(element) {
        return {
          isDuplicado: {
            valid: false
          }
        }
      }
    }
    return null;
  }
}
