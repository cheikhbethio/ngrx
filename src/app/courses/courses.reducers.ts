import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "./model/course";
import { createReducer, on } from "@ngrx/store";
import { allCoursesLoaded } from "./courses.action";


export interface CoursesState extends EntityState<Course> {
}
export const adapter = createEntityAdapter<Course>(
	{ sortComparer: compareCourses }
);

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
	initialCoursesState,
	on(allCoursesLoaded, (state, action) => adapter.addAll(action.courses, state))
);

export const { selectAll } = adapter.getSelectors();





