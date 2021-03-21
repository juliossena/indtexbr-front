import React, { useState, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import { productOperations } from '../../../store/reducers/product';
import ModalConfirm from '../../../shared/components/modal/modalConfirm/ModalConfirm';
import { Product } from '../../../shared/modals/product/product';


interface PDeleteProduct {
    openDeleteProduct: boolean;
    setOpenDeleteProduct: Dispatch<SetStateAction<boolean>>;
    product: Product | undefined;
}

const DeleteProduct = ({
    openDeleteProduct,
    setOpenDeleteProduct,
    product,
}: PDeleteProduct) => {
    if (!product) {
        return null;
    }
    const [loadingBlock, setLoadingBlock] = useState(false);
    const dispatch = useDispatch();
    const deleteProduct = async (x:number) => dispatch(productOperations.deleteProduct(x));

    const handleDeleteProduct = async () => {
        setLoadingBlock(true);
        try {
            await deleteProduct(product.idProduct);
        } catch (e) {
            setOpenDeleteProduct(false);
        }
        setLoadingBlock(false);
        setOpenDeleteProduct(false);
    };

    return (
      <ModalConfirm
        loadingPrimary={loadingBlock}
        message="Tem certeza que deseja excluir o membro?"
        title="Excluir membro"
        onClose={() => setOpenDeleteProduct(false)}
        open={openDeleteProduct}
        onClickPrimary={handleDeleteProduct}
        onClickSecondary={() => setOpenDeleteProduct(false)}
      />
    );
};

export default DeleteProduct;
