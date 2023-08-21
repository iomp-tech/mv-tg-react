import { CourseState, CourseActions, CourseActionTypes } from '../types/ICourse'

const initialState: CourseState = {
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
		master: "",
		btnText: "",
		formTitle: "",
		idAwo: 0,
		thankPageTitle: "",
		thankPageDescription: "",

		programm: {
			title: "",
			description: "",

			items: []
		},

		isDemo: false,
		btnTextDemo: "",
		priceDemo: "",
		imageDemo: "",
		categoryDemo: "",
		titleDemo: "",
		descriptionDemo: "",
		masterDemo: "",
		idAwoDemo: 0,
		thankPageTitleDemo: "",
		thankPageDescriptionDemo: "",
	},
	isLoadedById: false
}

const timetable = (state = initialState, action: CourseActions) => {
	if (action.type === CourseActionTypes.SET_COURSE_ITEMS) {
		return {
			...state,
			items: action.payload,
			isLoaded: true,
		}
	}

	if (action.type === CourseActionTypes.SET_COURSE_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload
		}
	}

	if (action.type === CourseActionTypes.SET_COURSE_ITEM_BY_ID) {
		return {
			...state,
			itemById: action.payload,
			isLoadedById: true,
		}
	}

	if (action.type === CourseActionTypes.SET_COURSE_IS_LOADED_BY_ID) {
		return {
			...state,
			isLoadedById: action.payload
		}
	}

	return state
}

export default timetable