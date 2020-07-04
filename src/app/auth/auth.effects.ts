import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Authentication } from './action-types';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(Authentication.login),
            tap(action => {
                localStorage.setItem('udemy-tuto-user', JSON.stringify(action['user']));
            }));
    }, { dispatch: false });

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(Authentication.logout),
            tap(action => {
                this.router.navigateByUrl('/login');
                localStorage.removeItem('udemy-tuto-user');
            }));
    }, { dispatch: false });
    constructor(private actions$: Actions, private router: Router) { }


}
