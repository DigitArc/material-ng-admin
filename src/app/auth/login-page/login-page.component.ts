import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loadingSpinnerState$: Subscription;
  loadingState: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.fb.control("", [Validators.required]),
      password: this.fb.control("", [Validators.required])
    });
  }

  ngOnDestroy() {
    this.loadingSpinnerState$.unsubscribe();
  }

  get username() {
    return this.loginForm.get("username") as FormControl;
  }

  get password() {
    return this.loginForm.get("password") as FormControl;
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      // RESET FORM.
      this.loginForm.reset();
      this.username.markAsPending();
      this.password.markAsPending();
    }
  }
}
