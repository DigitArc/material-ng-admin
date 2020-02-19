import { Component, ViewChild, NgZone } from "@angular/core";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { take } from "rxjs/operators";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styleUrls: ["./inputs.component.scss"]
})
export class InputsComponent {
  value = "Clear me";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private ngZone: NgZone) {}

  @ViewChild("autosize", { static: true })
  autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
