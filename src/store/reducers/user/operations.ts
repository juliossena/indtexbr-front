import { Dispatch } from 'redux';
import { BodyUserLogin, BodyCreateMember } from '../../../shared/modals/user/bodies';

import { ERROR_INVALID_PASSWORD } from '../../../shared/constants/messages';

import * as userActions from './actions';
import * as serviceUser from '../../../shared/services/serviceUser';
import { setAuthorizationToken } from '../../../shared/functions/connection/auth';

export const reqLogin = (bodyUserLogin: BodyUserLogin) => async (dispatch: Dispatch) => {
    try {
        const userData = await serviceUser.login(bodyUserLogin);
        dispatch(userActions.setUserData(userData.user));
        setAuthorizationToken(userData.token);
    } catch (error) {
        throw new Error(ERROR_INVALID_PASSWORD);
    }
};

export const getUserData = () => async (dispatch: Dispatch) => {
    try {
        const userData = await serviceUser.getUserData();
        dispatch(userActions.setUserData(userData.user));
        setAuthorizationToken(userData.token);
    } catch (error) {
        throw new Error(error);
    }
};

export const getAllUsers = () => async (dispatch: Dispatch) => {
    try {
        const users = await serviceUser.getAllUsers();
        dispatch(userActions.setUsers(users));
    } catch (error) {
        throw new Error(error);
    }
};

export const insertMember = (body: BodyCreateMember) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.insertMember(body);
        getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const editMember = (
    body: BodyCreateMember,
    idUser: number,
) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.editUser(body, idUser);
        getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteUser = (idUser: number) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.deleteUser(idUser);
        getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};
