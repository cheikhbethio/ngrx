import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import * as actionTypes from "../action-types";
import { AppState } from "../../reducers";
@Component({
	// tslint:disable-next-line:component-selector
	selector: "login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private auth: AuthService,
		private router: Router,
		private store: Store<AppState>) {

		this.form = fb.group({
			email: ["test@angular-university.io", [Validators.required]],
			password: ["test", [Validators.required]]
		});

	}

	ngOnInit() {

	}

	login() {
		const credentials = this.form.value;
		this.auth.login(credentials.email, credentials.password)
			.pipe(
				tap(user => {
					this.store.dispatch(actionTypes.Authentication.login({ user }));
					this.router.navigateByUrl("/courses");
				})
			)
			.subscribe(
				noop,
				() => alert("login failed")
			);
	}

}

