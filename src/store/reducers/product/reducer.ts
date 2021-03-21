import { Reducer } from 'redux';

import { ProductState, ProductTypes } from './types';

const INITIAL_STATE: ProductState = {
  products: [],
};

const reducer: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.SET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
