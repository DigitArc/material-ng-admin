import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-form-layout",
  templateUrl: "./form-layout.component.html",
  styleUrls: ["./form-layout.component.scss"]
})
export class FormLayoutComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: "auto"
    });
  }
  // For form validator
  email = new FormControl("", [Validators.required, Validators.email]);

  // Sufix and prefix
  hide = true;

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
}
