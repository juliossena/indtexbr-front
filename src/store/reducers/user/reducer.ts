import { Reducer } from 'redux';

import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  userData: undefined,
  users: [],
  areas: [],
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_DATA_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case UserTypes.SET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UserTypes.SET_ALL_AREAS:
      return {
        ...state,
        areas: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
