import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Action } from "rxjs/internal/scheduler/Action";
import { loadAllCourses, allCoursesLoaded, coursesUpdated } from "./courses.action";
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
	saveCourses$ = createEffect(() =>
		this.action$.pipe(
			ofType(coursesUpdated),
			concatMap(action => this.coursesHttpService.saveCourse(action.update.id, action.update.changes))
		),
		{ dispatch: false }
	);
	constructor(private action$: Actions, private coursesHttpService: CoursesHttpService) { }
}
