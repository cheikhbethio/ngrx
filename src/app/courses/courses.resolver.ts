import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers";
import { tap, first, finalize, filter } from "rxjs/operators";
import { loadAllCourses, allCoursesLoaded } from "./courses.action";
import { areCoursesLoaded } from "./courses.selectors";

@Injectable()
export class CoursesResolver implements Resolve<Observable<any>> {
	loading = false;
	constructor(private store: Store<AppState>) {
	}
	resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		return this.store.pipe(
			select(areCoursesLoaded),
			tap((coursesAlreadyLoaded) => {
				if (!this.loading && !coursesAlreadyLoaded) {
					this.loading = true;
					this.store.dispatch(loadAllCourses());
				}
			}),
			filter(coursesAlreadyLoaded => coursesAlreadyLoaded),
			first(),
			finalize(() => this.loading = false)
		);
	}
}
