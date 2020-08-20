import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction("[Courses resolver] Load all courses");

export const allCoursesLoaded = createAction(
	"[Load Courses Effects] All courses are loaded",
	props<{ courses: Course[] }>()
);

export const coursesUpdated = createAction(
	"[edit course dialog] Update a course",
	props<{ update: Update<Course> }>()
);