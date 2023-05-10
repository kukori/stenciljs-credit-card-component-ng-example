import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}
  form = this.formBuilder.group({
    creditCard: ['', Validators.required],
    cardExpiration: ['', Validators.required],
    cvv: ['', Validators.required],
    cardHolder: ['', Validators.required],
  });

  public onSubmit(event: any) {
    console.log(this.form)
    if (this.form.valid) {
      console.log(this.form.value.creditCard);
    } else {
      console.error('This form is invalid');
    }
  }
}
