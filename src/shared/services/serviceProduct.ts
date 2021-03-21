import { BodyCreateProduct } from '../modals/product/bodies';
import {
    ConnectApiPost,
    ConnectApiGet,
    urls,
    ConnectApiPUT,
    ConnectApiDelete,
} from '../functions/connection';

export const getAllProducts = async () => {
    const respostaServico = await ConnectApiGet(urls.URL_PRODUCT);
    return respostaServico.data;
};

export const insertProduct = async (body: BodyCreateProduct) => {
    const respostaServico = await ConnectApiPost(urls.URL_PRODUCT, body);
    return respostaServico.data;
};

export const editProduct = async (body: BodyCreateProduct, idProduct: number) => {
    const url = urls.URL_PRODUCT_ID.replace('{idProduct}', `${idProduct}`);
    const respostaServico = await ConnectApiPUT(url, body);
    return respostaServico.data;
};

export const deleteProduct = async (idProduct: number) => {
    const url = urls.URL_PRODUCT_ID.replace('{idProduct}', `${idProduct}`);
    const respostaServico = await ConnectApiDelete(url);
    return respostaServico.data;
};
