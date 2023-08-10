import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  OnClick() {
    console.log('Submit button clicked!');
  }

  onSubmit(form: NgForm) {
    console.log(`email: ${form.value.email} password: ${form.value.password}`);
  }
}
