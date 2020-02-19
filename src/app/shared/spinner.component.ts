import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "app-spinner",
  template: `
    <div
      class="preloader"
      [ngStyle]="{ display: isSpinnerVisible ? 'block' : 'none' }"
    >
      <div class="spinner">
        <mat-spinner strokeWidth="3" color="accent"></mat-spinner>
      </div>
    </div>
  `
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;

  constructor(private router: Router) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
