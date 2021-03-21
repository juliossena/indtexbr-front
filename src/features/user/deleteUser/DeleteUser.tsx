import React, { useState, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import { operations as operationsUser } from '../../../store/reducers/user';
import ModalConfirm from '../../../shared/components/modal/modalConfirm/ModalConfirm';
import { User } from '../../../shared/modals/user/user';


interface PDeleteUser {
    openDeleteUser: boolean;
    setOpenDeleteUser: Dispatch<SetStateAction<boolean>>;
    user: User | undefined;
}

const DeleteUser = ({
    openDeleteUser,
    setOpenDeleteUser,
    user,
}: PDeleteUser) => {
    if (!user) {
        return null;
    }
    const [loadingBlock, setLoadingBlock] = useState(false);
    const dispatch = useDispatch();
    const deleteUser = async (x:number) => dispatch(operationsUser.deleteUser(x));

    const handleDeleteUser = async () => {
        setLoadingBlock(true);
        try {
            await deleteUser(user.idUser);
        } catch (e) {
            setOpenDeleteUser(false);
        }
        setLoadingBlock(false);
        setOpenDeleteUser(false);
    };

    return (
      <ModalConfirm
        loadingPrimary={loadingBlock}
        message="Tem certeza que deseja excluir o membro?"
        title="Excluir membro"
        onClose={() => setOpenDeleteUser(false)}
        open={openDeleteUser}
        onClickPrimary={handleDeleteUser}
        onClickSecondary={() => setOpenDeleteUser(false)}
      />
    );
};

export default DeleteUser;
