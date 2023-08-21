import { Timetable } from "../../models/ITimetable"

export interface TimetableState {
	items: Timetable[];
	isLoaded: boolean;

	itemById: Timetable;
	isLoadedById: boolean;
}

export enum TimetableActionTypes {
	SET_TIMETABLE_ITEMS = "SET_TIMETABLE_ITEMS",
	SET_TIMETABLE_IS_LOADED = "SET_TIMETABLE_IS_LOADED",

	SET_TIMETABLE_ITEM_BY_ID = "SET_TIMETABLE_ITEM_BY_ID",
	SET_TIMETABLE_IS_LOADED_BY_ID = "SET_TIMETABLE_IS_LOADED_BY_ID",
}

interface setSetTimetableItems {
	type: TimetableActionTypes.SET_TIMETABLE_ITEMS;
	payload: Timetable[];
}

interface setSetTimetableIsLoaded {
	type: TimetableActionTypes.SET_TIMETABLE_IS_LOADED;
	payload: boolean;
}

interface setSetTimetableItemById {
	type: TimetableActionTypes.SET_TIMETABLE_ITEM_BY_ID;
	payload: Timetable;
}

interface setSetTimetableIsLoadedById {
	type: TimetableActionTypes.SET_TIMETABLE_IS_LOADED_BY_ID;
	payload: boolean;
}

export type TimetableActions = setSetTimetableItems | setSetTimetableIsLoaded | setSetTimetableItemById | setSetTimetableIsLoadedById;
