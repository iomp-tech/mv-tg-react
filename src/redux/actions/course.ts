import { Dispatch } from 'redux'

import $api from '../../http/'

import { Course } from '../../models/ICourse'
import { CourseActions, CourseActionTypes } from '../types/ICourse'

export const fetchCourse = () => {
	return async (dispatch: Dispatch<CourseActions>) => {
		dispatch({
			type: CourseActionTypes.SET_COURSE_IS_LOADED,
			payload: false,
		});

		const { data } = await $api.get<Course[]>("/courses");

		dispatch({
			type: CourseActionTypes.SET_COURSE_ITEMS,
			payload: data
		});
	};
};

export const fetchCourseById = (id: string) => {
	return async (dispatch: Dispatch<CourseActions>) => {
		dispatch({
			type: CourseActionTypes.SET_COURSE_IS_LOADED_BY_ID,
			payload: false,
		});

		const { data } = await $api.get<Course>(`/courses/${id}`);

		dispatch({
			type: CourseActionTypes.SET_COURSE_ITEM_BY_ID,
			payload: data
		});
	};
};