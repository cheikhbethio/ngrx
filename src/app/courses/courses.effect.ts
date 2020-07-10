import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Action } from "rxjs/internal/scheduler/Action";
import { loadAllCourses, allCoursesLoaded } from "./courses.action";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";


@Injectable()
export class CoursesEffects {
	/**
	 *
	 */
	loadCourses$ = createEffect(() => {
		return this.action$.pipe(
			ofType(loadAllCourses),
			concatMap(action => this.coursesHttpService.findAllCourses()),
			map(courses => allCoursesLoaded({ courses }))
		);
	});
	constructor(private action$: Actions, private coursesHttpService: CoursesHttpService) { }
}
