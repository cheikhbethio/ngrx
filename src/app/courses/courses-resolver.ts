import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, filter, first } from 'rxjs/operators';
import { CourseEntityService } from './services/courses-entity.service';


@Injectable()
export class CourseResolver implements Resolve<boolean> {
	/**
	 *
	 */
	constructor(private courseEntity: CourseEntityService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.courseEntity.loaded$
			.pipe(
				tap(loaded => {
					if (!loaded) {
						this.courseEntity.getAll();
					}
				}),
				filter(loaded => !!loaded),
				first()
			);
		// return this.courseEntity.getAll()
		// 	.pipe(
		// 		map(courses => !!courses)
		// 	);
	}
}
