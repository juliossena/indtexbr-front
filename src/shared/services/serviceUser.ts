import { BodyUserLogin, BodyCreateMember } from '../modals/user/bodies';
import {
    ConnectApiPost,
    ConnectApiGet,
    urls,
    ConnectApiPUT,
    ConnectApiDelete,
} from '../functions/connection';


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
