import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Location, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="(auth.isLoading$ | async) === false">
      <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
        <button (click)="auth.logout({ returnTo: doc.location.origin })">
          Log out
        </button>
      </ng-container>

      <ng-template #loggedOut>
        <button (click)="auth.loginWithRedirect()">Log in</button>
      </ng-template>
    </ng-container>
  `,
  styles: [],
})
export class AuthButtonComponent implements OnInit {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public doc: Document
  ) {}

  ngOnInit(): void {}
}
