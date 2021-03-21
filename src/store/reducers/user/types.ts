import { User } from '../../../shared/modals/user/user';


export enum UserTypes {
  SET_DATA_USER = '@user/SET_DATA_USER',
  SET_ALL_USERS = '@user/SET_ALL_USERS',
}

export interface UserState {
  readonly userData?: User
  readonly users?: User[]
}
