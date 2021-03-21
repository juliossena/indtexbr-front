import { Dispatch } from 'redux';
import { BodyInsertArea, BodyUserLogin, BodyCreateMember } from '../../../shared/modals/user/bodies';

import { ERROR_INVALID_PASSWORD } from '../../../shared/constants/messages';

import * as userActions from './actions';
import * as serviceUser from '../../../shared/services/serviceUser';
import { setAuthorizationToken } from '../../../shared/functions/connection/auth';
import { Company } from '../../../shared/modals/user/user';

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

export const blockUser = (idUser: number) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.blockUser(idUser);
        getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const unlockUser = (idUser: number) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.unlockUser(idUser);
        getAllUsers()(dispatch);
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

export const importUserList = (body: FormData) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.importUserList(body);
        getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const insertAdmin = (body: BodyCreateMember) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.insertAdmin(body);
        getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const insertAdminGlobal = (
    body: BodyCreateMember,
    company: Company,
) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.insertAdminGlobal(body, company);
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

export const getAllAreas = () => async (dispatch: Dispatch) => {
    try {
        const areas = await serviceUser.getAllAreas();
        dispatch(userActions.setAreas(areas));
    } catch (error) {
        dispatch(userActions.setAreas([]));
    }
};

export const insertArea = (body: BodyInsertArea) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.insertArea(body);
        await getAllAreas()(dispatch);
        await getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteArea = (idArea: number) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.deleteArea(idArea);
        await getAllAreas()(dispatch);
        await getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const editArea = (idArea: number, body: BodyInsertArea) => async (dispatch: Dispatch) => {
    try {
        await serviceUser.editArea(idArea, body);
        await getAllAreas()(dispatch);
        await getAllUsers()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};
