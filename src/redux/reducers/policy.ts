import { PolicyState, PolicyActions, PolicyActionTypes } from '../types/IPolicy'

const initialState: PolicyState = {
	items: [],
	isLoaded: false,
}

const timetable = (state = initialState, action: PolicyActions) => {
	if (action.type === PolicyActionTypes.SET_POLICY_ITEMS) {
		return {
			...state,
			items: action.payload,
			isLoaded: true,
		}
	}

	if (action.type === PolicyActionTypes.SET_POLICY_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload
		}
	}

	return state
}

export default timetable