import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public isInvalidField( form:FormGroup, field:string ){
    return form.controls[field].errors 
      && form.controls[field].touched;
  }
  public isValidForm( form:FormGroup ):boolean{ return form.invalid; }

  // public isFieldEqualsTo( currentField:string, fieldToCompare:string ):ValidationErrors | null {
  //   return ( form:FormGroup ):ValidationErrors | null => {
      
  //     const field = form.get(currentField)?.value;
  //     const field2 = form.get(fieldToCompare)?.value;

  //     if( field !== field2 ){
  //         form.get(field2)?.setErrors({ notEquals: true });
  //         return { notEquals: true };
  //     }
  
  //     form.get(field2)?.setErrors(null);
  //     return null;
  //   } 
  // }
}
