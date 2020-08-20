import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "./model/course";
import { createReducer, on } from "@ngrx/store";
import { allCoursesLoaded, coursesUpdated } from "./courses.action";

export interface CoursesState extends EntityState<Course> {
	allCoursesLoaded: boolean;
}
export const adapter = createEntityAdapter<Course>(
	{ sortComparer: compareCourses }
);

export const initialCoursesState = adapter.getInitialState({
	allCoursesLoaded: false
});

export const coursesReducer = createReducer(
	initialCoursesState,
	on(allCoursesLoaded, (state, action) => adapter.addAll(action.courses, {...state, allCoursesLoaded: true})),
	on(coursesUpdated, (state, action) => adapter.updateOne(action.update, state))
);

export const { selectAll } = adapter.getSelectors();





