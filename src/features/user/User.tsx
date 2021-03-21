import React, {
 ChangeEvent, useEffect, useState,
} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../shared/components/buttons/Button';
import ButtonIcon from '../../shared/components/buttons/buttonIcon/ButtonIcon';
import Table from '../../shared/components/table/Table';
import { operations as userOperations } from '../../store/reducers/user';
import InsertMember from './insertEditMember/InsertEditMember';
import { User } from '../../shared/modals/user/user';
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
import DeleteUser from './deleteUser/DeleteUser';

const Member = () => {
  const dispatch = useDispatch();
  const getQuestions = async () => dispatch(userOperations.getAllUsers());
  const { users } = useSelector((state: RootStateGlobal) => state.userReducer);
  const [usersFilter, setUsersFilter] = useState<User[]>([]);
  const [userAction, setUserAction] = useState<User>();
  const [showInsertMember, setShowInsertMember] = useState(false);
  const [searchMember, setSearchMember] = useState('');
  const [editUser, setEditUser] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);

  useEffect(() => {
      getQuestions();
  }, []);

  useEffect(() => {
    if (users && users.length > 0) {
      setUsersFilter(users);
    }
  }, [users]);

  const goToEditUser = (user: User) => {
    setShowInsertMember(true);
    setEditUser(true);
    setUserAction(user);
  };

  const goToInsertUser = () => {
    setShowInsertMember(true);
    setEditUser(false);
    setUserAction(undefined);
  };

  const handleChangeSearchMember = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchMember(event.target.value);
    if (users && users.length > 0) {
      setUsersFilter(filterArraySearch(users, 'name', event.target.value));
    }
  };

  const handleOnClickDeleteUser = (user: User) => {
    setUserAction(user);
    setOpenDeleteUser(true);
  };

  const renderRowsTable = () => usersFilter.map((user: User) => ({
      columns: [
        user.name,
        <>
          <ButtonIcon
            style={{ marginRight: 16 }}
            onClick={() => goToEditUser(user)}
          >
            <EditIcon />
          </ButtonIcon>
          <ButtonIcon
            onClick={() => handleOnClickDeleteUser(user)}
          >
            <DeleteIcon />
          </ButtonIcon>
        </>,
      ],
    }));

  if (showInsertMember) {
    return (
      <InsertMember
        setShowInsertMember={setShowInsertMember}
        isEdit={editUser}
        user={userAction}
      />
    );
  }

  return (
    <Container>
      <DeleteUser
        openDeleteUser={openDeleteUser}
        user={userAction}
        setOpenDeleteUser={setOpenDeleteUser}
      />
      <BreadCrumbs
        listMenus={[{
          name: 'Membros',
        }]}
      />
      <Header>
        <TextHeader>
          Confira abaixo os membros cadastrados e/ou insira um novo membro.
        </TextHeader>
        <BoxHeaderButtons>
          <Input
            style={{ marginRight: 16, width: 260 }}
            backgroundColor={colors.grey40}
            showBorder={false}
            icon="search"
            placeholder="Buscar membro..."
            value={searchMember}
            onChange={handleChangeSearchMember}
          />
          <Button
            style={{ marginRight: 16, width: 180 }}
            onClick={goToInsertUser}
            icon="plus"
          >
            NOVO MEMBRO
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

export default Member;
