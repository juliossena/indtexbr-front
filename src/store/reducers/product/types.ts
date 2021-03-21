import { Product } from '../../../shared/modals/product/product';


export enum ProductTypes {
  SET_ALL_PRODUCTS = '@product/SET_ALL_PRODUCTS',
}

export interface ProductState {
  readonly products: Product[]
}
