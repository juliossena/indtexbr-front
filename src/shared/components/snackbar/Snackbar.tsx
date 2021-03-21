import React, {
 useState, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateGlobal } from '../../../store/reducer';
import { geralActions } from '../../../store/reducers/geral';

import {
    Container,
    BoxMessage,
} from './styles';

const TIME_SHOW = 3000;

const SnackBar = () => {
  const { snackBar } = useSelector((state: RootStateGlobal) => state.geralReducer);
  const dispatch = useDispatch();
  const [position, setPosition] = useState(-3000);

  useEffect(() => {
    if (snackBar.show) {
      setPosition(0);
      setTimeout(() => {
        setPosition(-3000);
        dispatch(geralActions.setSnackBar({
          type: snackBar.type,
          message: snackBar.message,
          show: false,
        }));
      }, TIME_SHOW);
    }
  }, [snackBar.show]);

  return (
    <Container position={position}>
      <BoxMessage type={snackBar.type}>
        {snackBar.message}
      </BoxMessage>
    </Container>
  );
};

export default SnackBar;
