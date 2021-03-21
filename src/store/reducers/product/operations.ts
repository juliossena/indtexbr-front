import { Dispatch } from 'redux';
import { BodyCreateProduct } from '../../../shared/modals/product/bodies';

import * as productActions from './actions';
import * as serviceProduct from '../../../shared/services/serviceProduct';

export const getAllProducts = () => async (dispatch: Dispatch) => {
    try {
        const products = await serviceProduct.getAllProducts();
        dispatch(productActions.setProducts(products));
    } catch (error) {
        throw new Error(error);
    }
};

export const insertProduct = (body: BodyCreateProduct) => async (dispatch: Dispatch) => {
    try {
        await serviceProduct.insertProduct(body);
        getAllProducts()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const editProduct = (
    body: BodyCreateProduct,
    idProduct: number,
) => async (dispatch: Dispatch) => {
    try {
        await serviceProduct.editProduct(body, idProduct);
        getAllProducts()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteProduct = (idProduct: number) => async (dispatch: Dispatch) => {
    try {
        await serviceProduct.deleteProduct(idProduct);
        getAllProducts()(dispatch);
    } catch (error) {
        throw new Error(error);
    }
};
