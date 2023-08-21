import { Dispatch } from 'redux'

import $api from '../../http/'

import { Timetable } from '../../models/ITimetable'
import { TimetableActions, TimetableActionTypes } from '../types/ITimetable'

export const fetchTimetable = () => {
	return async (dispatch: Dispatch<TimetableActions>) => {
		dispatch({
			type: TimetableActionTypes.SET_TIMETABLE_IS_LOADED,
			payload: false,
		});

		const { data } = await $api.get<Timetable[]>("/timetable");

		dispatch({
			type: TimetableActionTypes.SET_TIMETABLE_ITEMS,
			payload: data
		});
	};
};

export const fetchTimetableById = (id: string) => {
	return async (dispatch: Dispatch<TimetableActions>) => {
		dispatch({
			type: TimetableActionTypes.SET_TIMETABLE_IS_LOADED_BY_ID,
			payload: false,
		});

		const { data } = await $api.get<Timetable>(`/timetable/${id}`);

		dispatch({
			type: TimetableActionTypes.SET_TIMETABLE_ITEM_BY_ID,
			payload: data
		});
	};
};