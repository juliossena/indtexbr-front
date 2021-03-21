import { combineReducers } from 'redux';
import { RootStateOrAny } from 'react-redux';
import { userReducer } from './reducers/user';
import { geralReducer } from './reducers/geral';
import { productReducer } from './reducers/product';
import { UserState } from './reducers/user/types';
import { GeralState } from './reducers/geral/types';
import { ProductState } from './reducers/product/types';


export interface RootStateGlobal extends RootStateOrAny {
  userReducer: UserState;
  geralReducer: GeralState;
  productReducer: ProductState;
}

export default combineReducers<RootStateGlobal>({
  userReducer,
  geralReducer,
  productReducer,
});
