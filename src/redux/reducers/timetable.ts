import { TimetableState, TimetableActions, TimetableActionTypes } from '../types/ITimetable'

const initialState: TimetableState = {
	items: [],
	isLoaded: false,

	itemById: {
		_id: "",
		price: "",
		videoUrl: "",
		image: "",
		category: "",
		title: "",
		description: "",
		date: "",
		btnText: "",
		formTitle: "",
		thankPageTitle: "",
		thankPageDescription: "",
		isRedirect: false,
		redirectUrl: "",
		idAwo: 0
	},
	isLoadedById: false
}

const timetable = (state = initialState, action: TimetableActions) => {
	if (action.type === TimetableActionTypes.SET_TIMETABLE_ITEMS) {
		return {
			...state,
			items: action.payload,
			isLoaded: true,
		}
	}

	if (action.type === TimetableActionTypes.SET_TIMETABLE_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload
		}
	}

	if (action.type === TimetableActionTypes.SET_TIMETABLE_ITEM_BY_ID) {
		return {
			...state,
			itemById: action.payload,
			isLoadedById: true,
		}
	}

	if (action.type === TimetableActionTypes.SET_TIMETABLE_IS_LOADED_BY_ID) {
		return {
			...state,
			isLoadedById: action.payload
		}
	}

	return state
}

export default timetable