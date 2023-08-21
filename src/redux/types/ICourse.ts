import { Course } from "../../models/ICourse"

export interface CourseState {
	items: Course[];
	isLoaded: boolean;

	itemById: Course;
	isLoadedById: boolean;
}

export enum CourseActionTypes {
	SET_COURSE_ITEMS = "SET_COURSE_ITEMS",
	SET_COURSE_IS_LOADED = "SET_COURSE_IS_LOADED",

	SET_COURSE_ITEM_BY_ID = "SET_COURSE_ITEM_BY_ID",
	SET_COURSE_IS_LOADED_BY_ID = "SET_COURSE_IS_LOADED_BY_ID",
}

interface setSetCourseItems {
	type: CourseActionTypes.SET_COURSE_ITEMS;
	payload: Course[];
}

interface setSetCourseIsLoaded {
	type: CourseActionTypes.SET_COURSE_IS_LOADED;
	payload: boolean;
}

interface setSetCourseItemById {
	type: CourseActionTypes.SET_COURSE_ITEM_BY_ID;
	payload: Course;
}

interface setSetCourseIsLoadedById {
	type: CourseActionTypes.SET_COURSE_IS_LOADED_BY_ID;
	payload: boolean;
}

export type CourseActions = setSetCourseItems | setSetCourseIsLoaded | setSetCourseItemById | setSetCourseIsLoadedById;
