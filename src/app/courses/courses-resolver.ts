import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CourseEntityService } from "./services/courses-entity.service";


@Injectable()
export class CourseResolver implements Resolve<boolean> {
	/**
	 *
	 */
	constructor(private courseEntity: CourseEntityService) {
	}

	resolve(): Observable<boolean> {
		return this.courseEntity.getAll()
			.pipe(
				map(courses => !!courses)
			);
	}
}
