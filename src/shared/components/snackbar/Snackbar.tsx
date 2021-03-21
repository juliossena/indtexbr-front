import React, {
 useState, useEffect, Dispatch, SetStateAction,
} from 'react';

import {
    Container,
    BoxMessage,
} from './styles';

export interface PSnackbar {
    type: string;
    message: string;
    show: boolean;
    setSnackBar?: Dispatch<SetStateAction<PSnackbar>>;
}
const TIME_SHOW = 3000;

const SnackBar = ({
 type, message, show, setSnackBar,
}: PSnackbar) => {
    const [position, setPosition] = useState(-3000);

    useEffect(() => {
        if (show && setSnackBar) {
            setPosition(0);
            setTimeout(() => {
                setPosition(-3000);
                setSnackBar({
                    type,
                    message,
                    show: false,
                });
            }, TIME_SHOW);
        }
    }, [show]);

    return (
      <Container
        position={position}
      >
        <BoxMessage type={type}>
          {message}
        </BoxMessage>
      </Container>
    );
};

export default SnackBar;
