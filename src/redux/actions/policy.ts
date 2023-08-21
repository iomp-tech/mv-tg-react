import { Dispatch } from 'redux'

import $api from '../../http/'

import { Policy } from '../../models/IPolicy'
import { PolicyActions, PolicyActionTypes } from '../types/IPolicy'

export const fetchPolicy = () => {
	return async (dispatch: Dispatch<PolicyActions>) => {
		dispatch({
			type: PolicyActionTypes.SET_POLICY_IS_LOADED,
			payload: false,
		});

		const { data } = await $api.get<Policy[]>("/footer");

		dispatch({
			type: PolicyActionTypes.SET_POLICY_ITEMS,
			payload: data
		});
	};
};