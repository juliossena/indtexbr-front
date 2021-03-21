import React, {
 useState,
 useEffect,
 ChangeEvent,
 Dispatch,
 SetStateAction,
} from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import Button from '../../../shared/components/buttons/Button';
import { operations as userOperations } from '../../../store/reducers/user';
import { BodyCreateMember } from '../../../shared/modals/user/bodies';
import Checkbox from '../../../shared/components/input/checkbox/Checkbox';
import { Area, User } from '../../../shared/modals/user/user';
import BreadCrumbs from '../../../shared/components/breadCrumbs/BreadCrumbs';
import MultipleSelect from '../../../shared/components/select/multipleSelect/MultipleSelect';
import { POptions } from '../../../shared/components/select/Select';
import SnackBar, { PSnackbar } from '../../../shared/components/snackbar/Snackbar';
import {
    Container,
    BoxInsertMember,
    InputMember,
    BoxBottom,
    ContainerInsertMember,
    DisplayFlex,
} from './styles';
import InputDate from '../../../shared/components/input/inputDate/InputDate';

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
    const { areas } = useSelector((state: RootStateOrAny) => state.userReducer);
    const insertMember = async (x: BodyCreateMember) => dispatch(userOperations
        .insertMember(x));
    const insertAdmin = async (x: BodyCreateMember) => dispatch(userOperations
      .insertAdmin(x));
    const editMember = async (x: BodyCreateMember, y: number) => dispatch(userOperations
        .editMember(x, y));
    const getAllAreas = async () => dispatch(userOperations.getAllAreas());
    const [loading, setLoading] = useState(false);
    const [snackBar, setSnackbar] = useState<PSnackbar>({ type: '', message: '', show: false });
    const [itensAreaSelected, setItensAreaSelected] = useState<POptions[]>([]);
    const [bodyCreateMember, setBodyCreateMember] = useState<BodyCreateMember>(INITIAL_BODY);

    useEffect(() => {
      if (!areas || areas.length === 0) {
        getAllAreas();
      }
    }, []);

    useEffect(() => {
      setBodyCreateMember({
        ...bodyCreateMember,
        areas: itensAreaSelected.map(option => parseInt(option.value, 10)),
      });
    }, [itensAreaSelected]);

    useEffect(() => {
      if (user) {
        setBodyCreateMember({
          ...bodyCreateMember,
          name: user.name,
          email: user.email,
          admin: user.idTypeUser === 2,
          areas: user.areas.map(area => area.idArea),
          timeEnd: user.timeEnd,
          timeStart: user.timeStart,
        });
        setItensAreaSelected(user.areas.map(area => ({
          value: `${area.idArea}`,
          viewValue: area.name,
        })));
      } else {
        setItensAreaSelected([]);
        setBodyCreateMember(INITIAL_BODY);
      }
    }, [isEdit, user]);

    const verifyDisabledButton = () => {
      if (bodyCreateMember.email === ''
        || bodyCreateMember.name === ''
        || bodyCreateMember.areas.length <= 0) {
        return true;
      }
      return false;
    };

    const convertAreasToPOptions = () => {
      const arrayReturn: POptions[] = [];

      areas.forEach((area: Area) => {
        arrayReturn.push(({
          value: `${area.idArea}`,
          viewValue: area.name,
        }));
      });

      return arrayReturn;
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

    const handleChangeAdmin = (event: ChangeEvent<HTMLInputElement>) => {
      setBodyCreateMember({
        ...bodyCreateMember,
        admin: event.target.checked,
      });
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

    const handleChangeBody = (event: ChangeEvent<HTMLInputElement>, name: string) => {
      setBodyCreateMember({
          ...bodyCreateMember,
          [name]: event.target.value,
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
                title="Senha (opcional)"
                placeholder="Digite"
                value={bodyCreateMember.password}
                onChange={handleChangePassword}
                style={{ width: 240 }}
                disabled={isEdit}
              />
              <InputDate
                title="Hora acesso inicial (opcional)"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeBody(e, 'timeStart')}
                type="time"
                value={bodyCreateMember.timeStart}
                style={{ marginLeft: 32, width: 100 }}
              />
              <InputDate
                title="Hora acesso final (opcional)"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeBody(e, 'timeEnd')}
                type="time"
                value={bodyCreateMember.timeEnd}
                style={{ marginLeft: 32, width: 100 }}
              />
            </DisplayFlex>

            <MultipleSelect
              listOptions={convertAreasToPOptions()}
              itensSelected={itensAreaSelected}
              setItensSelected={setItensAreaSelected}
              title="Área(s)*"
            />
            <Checkbox
              onChange={handleChangeAdmin}
              idCheckbox="admin"
              text="Este membro tem acesso de Gerenciador na plataforma"
              style={{ marginTop: 24 }}
              checked={bodyCreateMember.admin}
            />
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
