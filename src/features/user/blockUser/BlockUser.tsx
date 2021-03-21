import React, { useState, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import { operations as operationsUser } from '../../../store/reducers/user';
import ModalConfirm from '../../../shared/components/modal/modalConfirm/ModalConfirm';
import { User } from '../../../shared/modals/user/user';


interface PBlockUser {
    openBlockUser: boolean;
    setOpenBlockUser: Dispatch<SetStateAction<boolean>>;
    user: User | undefined;
}

const BlockUser = ({
    openBlockUser,
    setOpenBlockUser,
    user,
}: PBlockUser) => {
    if (!user) {
        return null;
    }
    const [loadingBlock, setLoadingBlock] = useState(false);
    const dispatch = useDispatch();
    const blockUser = async (x:number) => dispatch(operationsUser.blockUser(x));
    const unlockUser = async (x:number) => dispatch(operationsUser.unlockUser(x));

    const handleBlockUser = async () => {
        setLoadingBlock(true);
        try {
            if (user.block) {
                await unlockUser(user.idUser);
            } else {
                await blockUser(user.idUser);
            }
        } catch (e) {
            setOpenBlockUser(false);
        }
        setLoadingBlock(false);
        setOpenBlockUser(false);
    };

    return (
      <ModalConfirm
        loadingPrimary={loadingBlock}
        message={user.block ? 'Tem certeza que deseja desbloquear o membro?' : 'Tem certeza que deseja bloquear o membro?'}
        title={user.block ? 'Desbloquear membro' : 'Bloquear membro'}
        onClose={() => setOpenBlockUser(false)}
        open={openBlockUser}
        onClickPrimary={handleBlockUser}
        onClickSecondary={() => setOpenBlockUser(false)}
      />
    );
};

export default BlockUser;
