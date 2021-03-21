import React, {
 useState,
 useEffect,
 ChangeEvent,
 Dispatch,
 SetStateAction,
} from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../../shared/components/buttons/Button';
import { productOperations } from '../../../store/reducers/product';
import { BodyCreateProduct } from '../../../shared/modals/product/bodies';
import { Product } from '../../../shared/modals/product/product';
import BreadCrumbs from '../../../shared/components/breadCrumbs/BreadCrumbs';
import SnackBar, { PSnackbar } from '../../../shared/components/snackbar/Snackbar';
import {
    Container,
    BoxInsertProduct,
    InputProduct,
    BoxBottom,
    ContainerInsertProduct,
} from './styles';

interface PInsertProduct {
    setShowInsertProduct: Dispatch<SetStateAction<boolean>>;
    isEdit: boolean;
    product: Product | undefined;
}

const INITIAL_BODY = {
  name: '',
  amount: 0,
};

const InsertProduct = ({
  setShowInsertProduct,
  isEdit,
  product,
}: PInsertProduct) => {
    const dispatch = useDispatch();
    const insertProduct = async (x: BodyCreateProduct) => dispatch(productOperations
        .insertProduct(x));
    const editProduct = async (x: BodyCreateProduct, y: number) => dispatch(productOperations
        .editProduct(x, y));
    const [loading, setLoading] = useState(false);
    const [snackBar, setSnackbar] = useState<PSnackbar>({ type: '', message: '', show: false });
    const [bodyCreateProduct, setBodyCreateProduct] = useState<BodyCreateProduct>(INITIAL_BODY);

    useEffect(() => {
      if (product) {
        setBodyCreateProduct({
          ...bodyCreateProduct,
          name: product.name,
          amount: product.amount,
        });
      } else {
        setBodyCreateProduct(INITIAL_BODY);
      }
    }, [isEdit, product]);

    const verifyDisabledButton = () => {
      if (bodyCreateProduct.name === ''
        || bodyCreateProduct.amount < 0) {
        return true;
      }
      return false;
    };

    const handleInsertProduct = async () => {
        setLoading(true);
        try {
          if (isEdit && product) {
            await editProduct(bodyCreateProduct, product.idProduct);
          } else {
              await insertProduct(bodyCreateProduct);
              setSnackbar({
                type: 'success',
                message: 'Usuário criado com sucesso.',
                show: true,
              });
            }
          setShowInsertProduct(false);
        } catch (error) {
          setSnackbar({
            type: 'error',
            message: error.message,
            show: true,
          });
          setLoading(false);
        }
        setLoading(false);
    };

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setBodyCreateProduct({
            ...bodyCreateProduct,
            name: event.target.value,
        });
    };

    const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
        setBodyCreateProduct({
            ...bodyCreateProduct,
            amount: parseInt(event.target.value, 10),
        });
    };

    return (
      <Container>
        <SnackBar
          type={snackBar.type}
          message={snackBar.message}
          show={snackBar.show}
          setSnackBar={setSnackbar}
        />
        <BreadCrumbs
          listMenus={[{
            name: 'Produtos',
            action: () => setShowInsertProduct(false),
          }, {
            name: 'Novo produto',
          }]}
        />
        <ContainerInsertProduct>
          <BoxInsertProduct>
            <InputProduct
              title="Nome do produto*"
              placeholder="Digite"
              value={bodyCreateProduct.name}
              onChange={handleChangeName}
            />
            <InputProduct
              title="Quantidade*"
              placeholder="Digite"
              value={bodyCreateProduct.amount}
              onChange={handleChangeAmount}
              disabled={isEdit}
            />
            <BoxBottom>
              <Button
                onClick={() => setShowInsertProduct(false)}
                style={{ width: 120 }}
                type="primary-white"
              >
                Cancelar
              </Button>
              <Button
                loading={loading}
                onClick={handleInsertProduct}
                disabled={verifyDisabledButton()}
                style={{ width: 120, marginLeft: 16 }}
              >
                SALVAR
              </Button>
            </BoxBottom>
          </BoxInsertProduct>
        </ContainerInsertProduct>
      </Container>
    );
};

export default InsertProduct;
