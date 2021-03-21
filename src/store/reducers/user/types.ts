import { Area, User } from '../../../shared/modals/user/user';


export enum UserTypes {
  SET_DATA_USER = '@user/SET_DATA_USER',
  SET_ALL_USERS = '@user/SET_ALL_USERS',
  SET_ALL_AREAS = '@user/SET_ALL_AREAS',
  SET_ALL_LEVELS = '@user/SET_ALL_LEVELS',
}

export interface UserState {
  readonly userData?: User
  readonly users?: User[]
  readonly areas: Area[]
}
