import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

export const CUSTOM_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CardHolderComponent),
  multi: true,
};

@Component({
  selector: 'app-card-holder',
  template: `<card-holder-input (change)="onValueChange($event)"></card-holder-input>`,
  providers: [CUSTOM_INPUT_VALUE_ACCESSOR],
})
export class CardHolderComponent implements ControlValueAccessor {
  _onChange: (value: any) => void = noop;
  _onTouch: () => void = noop;

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  writeValue(obj: any): void {}

  onValueChange(event: any) {
    this._onChange(event.detail);
    this._onTouch();
  }
}
