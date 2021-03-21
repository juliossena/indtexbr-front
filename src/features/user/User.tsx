import React, {
 ChangeEvent, ReactNode, useEffect, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../shared/components/buttons/Button';
import ButtonIcon from '../../shared/components/buttons/buttonIcon/ButtonIcon';
import Table from '../../shared/components/table/Table';
import { operations as userOperations } from '../../store/reducers/user';
import IconEdit from '../../shared/images/icon/iconEdit';
import InsertMember from './insertEditMember/InsertEditMember';
import { User, Area } from '../../shared/modals/user/user';
import BlockUser from './blockUser/BlockUser';
import {
  Container,
  Header,
  TextHeader,
  BoxAreas,
  BoxNameArea,
  BoxHeaderButtons,
} from './styles';
import BreadCrumbs from '../../shared/components/breadCrumbs/BreadCrumbs';
import IconBlock from '../../shared/images/icon/iconBlock';
import IconAuthorized from '../../shared/images/icon/iconAuthorized';
import Input from '../../shared/components/input/Input';
import { colors } from '../../shared/functions/colors';
import { RootStateGlobal } from '../../store/reducer';
import { filterArraySearch } from '../../shared/functions/utils';
import IconTrash from '../../shared/images/icon/iconTrash';
import DeleteUser from './deleteUser/DeleteUser';

const Member = () => {
  const dispatch = useDispatch();
  const getQuestions = async () => dispatch(userOperations.getAllUsers());
  const { users } = useSelector((state: RootStateGlobal) => state.userReducer);
  const [usersFilter, setUsersFilter] = useState<User[]>([]);
  const [openBlockUser, setOpenBlockUser] = useState(false);
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

  const renderAreas = (areas: Area[]) => {
      const areasComponent: ReactNode[] = [];
      areas.forEach((area: Area) => {
        areasComponent.push(
          <BoxNameArea>
            {area.name}
          </BoxNameArea>,
        );
      });
      return (
        <BoxAreas>
          {areasComponent}
        </BoxAreas>
      );
  };

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

  const handleBlockUser = (user: User) => {
    setUserAction(user);
    setOpenBlockUser(true);
  };

  const renderRowsTable = () => usersFilter.map((user: User) => ({
      columns: [
        user.name,
        renderAreas(user.areas),
        <ButtonIcon
          onClick={() => handleBlockUser(user)}
        >
          {user.block ? <IconBlock /> : <IconAuthorized />}
        </ButtonIcon>,
        <>
          <ButtonIcon
            style={{ marginRight: 16 }}
            onClick={() => goToEditUser(user)}
          >
            <IconEdit />
          </ButtonIcon>
          <ButtonIcon
            onClick={() => handleOnClickDeleteUser(user)}
          >
            <IconTrash />
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
      <BlockUser
        openBlockUser={openBlockUser}
        user={userAction}
        setOpenBlockUser={setOpenBlockUser}
      />
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
            widthTd: '20%',
          },
          {
            name: 'Áreas',
            openClick: false,
            type: 'ReactNode',
            widthTd: '50%',
          },
          {
            name: 'Permissões',
            openClick: false,
            type: 'ReactNode',
          },
          {
            name: 'Ações',
            openClick: false,
            type: 'ReactNode',
          },
        ]}
        rows={renderRowsTable()}
      />
    </Container>
  );
};

export default Member;
