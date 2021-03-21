import React, {
 ChangeEvent, useEffect, useState,
} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../shared/components/buttons/Button';
import ButtonIcon from '../../shared/components/buttons/buttonIcon/ButtonIcon';
import Table from '../../shared/components/table/Table';
import { productOperations } from '../../store/reducers/product';
import InsertProduct from './insertEditProduct/InsertEditProduct';
import { Product as ProductObj } from '../../shared/modals/product/product';
import {
  Container,
  Header,
  TextHeader,
  BoxHeaderButtons,
} from './styles';
import BreadCrumbs from '../../shared/components/breadCrumbs/BreadCrumbs';
import Input from '../../shared/components/input/Input';
import { colors } from '../../shared/functions/colors';
import { RootStateGlobal } from '../../store/reducer';
import { filterArraySearch } from '../../shared/functions/utils';
import DeleteProduct from './deleteProduct/DeleteProduct';

const Product = () => {
  const dispatch = useDispatch();
  const getQuestions = async () => dispatch(productOperations.getAllProducts());
  const { products } = useSelector((state: RootStateGlobal) => state.productReducer);
  const [productsFilter, setProductsFilter] = useState<ProductObj[]>([]);
  const [productAction, setProductAction] = useState<ProductObj>();
  const [showInsertProduct, setShowInsertProduct] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const [editProduct, setEditProduct] = useState(false);
  const [openDeleteProduct, setOpenDeleteProduct] = useState(false);

  useEffect(() => {
      getQuestions();
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setProductsFilter(products);
    }
  }, [products]);

  const goToEditProduct = (product: ProductObj) => {
    setShowInsertProduct(true);
    setEditProduct(true);
    setProductAction(product);
  };

  const goToInsertProduct = () => {
    setShowInsertProduct(true);
    setEditProduct(false);
    setProductAction(undefined);
  };

  const handleChangeSearchProduct = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
    if (products && products.length > 0) {
      setProductsFilter(filterArraySearch(products, 'name', event.target.value));
    }
  };

  const handleOnClickDeleteProduct = (product: ProductObj) => {
    setProductAction(product);
    setOpenDeleteProduct(true);
  };

  const renderRowsTable = () => productsFilter.map((product: ProductObj) => ({
      columns: [
        product.name,
        <>
          <ButtonIcon
            style={{ marginRight: 16 }}
            onClick={() => goToEditProduct(product)}
          >
            <EditIcon />
          </ButtonIcon>
          <ButtonIcon
            onClick={() => handleOnClickDeleteProduct(product)}
          >
            <DeleteIcon />
          </ButtonIcon>
        </>,
      ],
    }));

  if (showInsertProduct) {
    return (
      <InsertProduct
        setShowInsertProduct={setShowInsertProduct}
        isEdit={editProduct}
        product={productAction}
      />
    );
  }

  return (
    <Container>
      <DeleteProduct
        openDeleteProduct={openDeleteProduct}
        product={productAction}
        setOpenDeleteProduct={setOpenDeleteProduct}
      />
      <BreadCrumbs
        listMenus={[{
          name: 'Productos',
        }]}
      />
      <Header>
        <TextHeader>
          Confira abaixo os produtos cadastrados e/ou insira um novo producto.
        </TextHeader>
        <BoxHeaderButtons>
          <Input
            style={{ marginRight: 16, width: 260 }}
            backgroundColor={colors.grey40}
            showBorder={false}
            icon="search"
            placeholder="Buscar produto..."
            value={searchProduct}
            onChange={handleChangeSearchProduct}
          />
          <Button
            style={{ marginRight: 16, width: 180 }}
            onClick={goToInsertProduct}
            icon="plus"
          >
            NOVO PRODUTO
          </Button>
        </BoxHeaderButtons>

      </Header>
      <Table
        titles={[
          {
            name: 'Nome',
            openClick: true,
            type: 'string',
            widthTd: '85%',
          },
          {
            name: 'Ações',
            openClick: false,
            type: 'ReactNode',
            widthTd: '15%',
          },
        ]}
        rows={renderRowsTable()}
      />
    </Container>
  );
};

export default Product;
