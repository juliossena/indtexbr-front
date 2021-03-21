import React, {
 useState,
 useEffect,
 ChangeEvent,
 Dispatch,
 SetStateAction,
} from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../../shared/components/buttons/Button';
import { operations as userOperations } from '../../../store/reducers/user';
import { BodyCreateMember } from '../../../shared/modals/user/bodies';
import { User } from '../../../shared/modals/user/user';
import BreadCrumbs from '../../../shared/components/breadCrumbs/BreadCrumbs';
import SnackBar, { PSnackbar } from '../../../shared/components/snackbar/Snackbar';
import {
    Container,
    BoxInsertMember,
    InputMember,
    BoxBottom,
    ContainerInsertMember,
    DisplayFlex,
} from './styles';

interface PInsertMember {
    setShowInsertMember: Dispatch<SetStateAction<boolean>>;
    isEdit: boolean;
    user: User | undefined;
}

const INITIAL_BODY = {
  name: '',
  email: '',
  password: '',
  areas: [],
  admin: false,
  timeStart: '',
  timeEnd: '',
};

const InsertMember = ({
  setShowInsertMember,
  isEdit,
  user,
}: PInsertMember) => {
    const dispatch = useDispatch();
    const insertMember = async (x: BodyCreateMember) => dispatch(userOperations
        .insertMember(x));
    const insertAdmin = async (x: BodyCreateMember) => dispatch(userOperations
      .insertAdmin(x));
    const editMember = async (x: BodyCreateMember, y: number) => dispatch(userOperations
        .editMember(x, y));
    const [loading, setLoading] = useState(false);
    const [snackBar, setSnackbar] = useState<PSnackbar>({ type: '', message: '', show: false });
    const [bodyCreateMember, setBodyCreateMember] = useState<BodyCreateMember>(INITIAL_BODY);

    useEffect(() => {
      if (user) {
        setBodyCreateMember({
          ...bodyCreateMember,
          name: user.name,
          email: user.email,
          admin: user.idTypeUser === 2,
        });
      } else {
        setBodyCreateMember(INITIAL_BODY);
      }
    }, [isEdit, user]);

    const verifyDisabledButton = () => {
      if (bodyCreateMember.email === ''
        || bodyCreateMember.name === '') {
        return true;
      }
      return false;
    };

    const handleInsertMember = async () => {
        setLoading(true);
        try {
          if (isEdit && user) {
            await editMember(bodyCreateMember, user.idUser);
          } else if (bodyCreateMember.admin) {
              await insertAdmin(bodyCreateMember);
              setSnackbar({
                type: 'success',
                message: 'Usuário criado com sucesso.',
                show: true,
              });
            } else {
              await insertMember(bodyCreateMember);
              setSnackbar({
                type: 'success',
                message: 'Usuário criado com sucesso.',
                show: true,
              });
            }
          setShowInsertMember(false);
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
        setBodyCreateMember({
            ...bodyCreateMember,
            name: event.target.value,
        });
    };

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setBodyCreateMember({
            ...bodyCreateMember,
            email: event.target.value,
        });
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
      setBodyCreateMember({
          ...bodyCreateMember,
          password: event.target.value,
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
            name: 'Membros',
            action: () => setShowInsertMember(false),
          }, {
            name: 'Novo membro',
          }]}
        />
        <ContainerInsertMember>
          <BoxInsertMember>
            <InputMember
              title="Nome completo*"
              placeholder="Digite"
              value={bodyCreateMember.name}
              onChange={handleChangeName}
            />
            <InputMember
              title="E-mail*"
              placeholder="Digite"
              value={bodyCreateMember.email}
              onChange={handleChangeEmail}
              disabled={isEdit}
            />
            <DisplayFlex>
              <InputMember
                title="Senha"
                placeholder="Digite"
                value={bodyCreateMember.password}
                onChange={handleChangePassword}
                style={{ width: 240 }}
                disabled={isEdit}
              />
            </DisplayFlex>
            <BoxBottom>
              <Button
                onClick={() => setShowInsertMember(false)}
                style={{ width: 120 }}
                type="primary-white"
              >
                Cancelar
              </Button>
              <Button
                loading={loading}
                onClick={handleInsertMember}
                disabled={verifyDisabledButton()}
                style={{ width: 120, marginLeft: 16 }}
              >
                SALVAR
              </Button>
            </BoxBottom>
          </BoxInsertMember>
        </ContainerInsertMember>
      </Container>
    );
};

export default InsertMember;
