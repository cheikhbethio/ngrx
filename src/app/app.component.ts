import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { AppState } from "./reducers";
import { isloggedInSelector, isloggedOutSelector } from "./auth/aut.selectors";
import { logout, login } from "./auth/auth.actions";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

	loading = true;
	isloggedIn$: Observable<boolean>;
	isloggedOut$: Observable<boolean>;


	constructor(private router: Router, private store: Store<AppState>) {

	}

	ngOnInit() {

		this.router.events.subscribe(event => {
			switch (true) {
				case event instanceof NavigationStart: {
					this.loading = true;
					break;
				}

				case event instanceof NavigationEnd:
				case event instanceof NavigationCancel:
				case event instanceof NavigationError: {
					this.loading = false;
					break;
				}
				default: {
					break;
				}
			}
		});

		const user = JSON.parse(localStorage.getItem("udemy-tuto-user"));
		if (user) {
			this.store.dispatch(login({ user }));
		}

		this.isloggedIn$ = this.store.pipe(
			select(isloggedInSelector)
		);
		this.isloggedOut$ = this.store.pipe(
			select(isloggedOutSelector)
		);

	}

	logout() {
		this.store.dispatch(logout());
	}

}
