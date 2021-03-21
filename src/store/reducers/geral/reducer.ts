import { Reducer } from 'redux';

import { GeralState, GeralTypes } from './types';

const INITIAL_STATE: GeralState = {
  loading: false,
  snackBar: {
    type: '',
    message: '',
    show: false,
  },
};

const reducer: Reducer<GeralState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GeralTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GeralTypes.SET_SNACK_BAR:
      return {
        ...state,
        snackBar: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
