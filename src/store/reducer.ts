import { combineReducers } from 'redux';
import { RootStateOrAny } from 'react-redux';
import { userReducer } from './reducers/user';
import { geralReducer } from './reducers/geral';
import { UserState } from './reducers/user/types';
import { GeralState } from './reducers/geral/types';


export interface RootStateGlobal extends RootStateOrAny {
  userReducer: UserState;
  geralReducer: GeralState;
}

export default combineReducers<RootStateGlobal>({
  userReducer,
  geralReducer,
});
