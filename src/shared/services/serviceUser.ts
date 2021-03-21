import { BodyInsertArea, BodyUserLogin, BodyCreateMember } from '../modals/user/bodies';
import {
    ConnectApiPost,
    ConnectApiGet,
    urls,
    ConnectApiPatch,
    ConnectApiPUT,
    ConnectApiDelete,
} from '../functions/connection';
import { Company } from '../modals/user/user';


export const login = async (body: BodyUserLogin) => {
    const respostaServico = await ConnectApiPost(urls.URL_AUTH, body);
    return respostaServico.data;
};

export const getUserData = async () => {
    const respostaServico = await ConnectApiGet(urls.URL_AUTH);
    return respostaServico.data;
};

export const getAllUsers = async () => {
    const respostaServico = await ConnectApiGet(urls.URL_USER);
    return respostaServico.data;
};

export const insertMember = async (body: BodyCreateMember) => {
    const respostaServico = await ConnectApiPost(urls.URL_USER, body);
    return respostaServico.data;
};

export const importUserList = async (body: FormData) => {
    const respostaServico = await ConnectApiPost(urls.URL_USER_LIST, body);
    return respostaServico.data;
};

export const insertAdmin = async (body: BodyCreateMember) => {
    const respostaServico = await ConnectApiPost(urls.URL_USER_INSERT_ADMIN_COMPANY, body);
    return respostaServico.data;
};

export const insertAdminGlobal = async (body: BodyCreateMember, company: Company) => {
    const url = urls.URL_USER_INSERT_ADMIN_COMPANY_GLOBAL.replace('{idCompany}', `${company.idCompany}`);
    const respostaServico = await ConnectApiPost(url, body);
    return respostaServico.data;
};

export const editUser = async (body: BodyCreateMember, idUser: number) => {
    const url = urls.URL_USER_ID.replace('{idUser}', `${idUser}`);
    const respostaServico = await ConnectApiPUT(url, body);
    return respostaServico.data;
};

export const deleteUser = async (idUser: number) => {
    const url = urls.URL_USER_ID.replace('{idUser}', `${idUser}`);
    const respostaServico = await ConnectApiDelete(url);
    return respostaServico.data;
};

export const blockUser = async (idUser: number) => {
    const url = urls.URL_USER_BLOCK.replace('{idUser}', `${idUser}`);
    const respostaServico = await ConnectApiPatch(url, {});
    return respostaServico.data;
};

export const unlockUser = async (idUser: number) => {
    const url = urls.URL_USER_UNLOCK.replace('{idUser}', `${idUser}`);
    const respostaServico = await ConnectApiPatch(url, {});
    return respostaServico.data;
};

export const getAllAreas = async () => {
    const respostaServico = await ConnectApiGet(urls.URL_AREA);
    return respostaServico.data;
};

export const getAllLevels = async () => {
    const respostaServico = await ConnectApiGet(urls.URL_LEVEL);
    return respostaServico.data;
};

export const insertArea = async (body: BodyInsertArea) => {
    const respostaServico = await ConnectApiPost(urls.URL_AREA, body);
    return respostaServico.data;
};

export const deleteArea = async (idArea: number) => {
    const url = urls.URL_AREA_ID.replace('{idArea}', `${idArea}`);
    const respostaServico = await ConnectApiDelete(url);
    return respostaServico.data;
};

export const editArea = async (idArea: number, body: BodyInsertArea) => {
    const url = urls.URL_AREA_ID.replace('{idArea}', `${idArea}`);
    const respostaServico = await ConnectApiPUT(url, body);
    return respostaServico.data;
};
