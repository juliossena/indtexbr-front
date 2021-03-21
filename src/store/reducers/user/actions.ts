import { User } from '../../../shared/modals/user/user';

import { UserTypes } from './types';

export const setUserData = (userData: User) => ({
  type: UserTypes.SET_DATA_USER,
  payload: userData,
});

export const setUsers = (users: User[]) => ({
  type: UserTypes.SET_ALL_USERS,
  payload: users,
});
