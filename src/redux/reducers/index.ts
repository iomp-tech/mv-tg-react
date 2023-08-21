import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import timetable from './timetable';
import course from './course';
import policy from './policy';

export const rootReducer = combineReducers({
	timetable,
	course,
	policy,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>