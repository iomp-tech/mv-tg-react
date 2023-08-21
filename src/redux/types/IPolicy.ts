import { Policy } from "../../models/IPolicy"

export interface PolicyState {
	items: Policy[];
	isLoaded: boolean;
}

export enum PolicyActionTypes {
	SET_POLICY_ITEMS = "SET_POLICY_ITEMS",
	SET_POLICY_IS_LOADED = "SET_POLICY_IS_LOADED",
}

interface setSetPolicyItems {
	type: PolicyActionTypes.SET_POLICY_ITEMS;
	payload: Policy[];
}

interface setSetPolicyIsLoaded {
	type: PolicyActionTypes.SET_POLICY_IS_LOADED;
	payload: boolean;
}

export type PolicyActions = setSetPolicyItems | setSetPolicyIsLoaded
