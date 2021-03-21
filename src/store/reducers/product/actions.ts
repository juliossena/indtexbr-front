
import { Product } from '../../../shared/modals/product/product';
import { ProductTypes } from './types';

export const setProducts = (products: Product[]) => ({
  type: ProductTypes.SET_ALL_PRODUCTS,
  payload: products,
});
