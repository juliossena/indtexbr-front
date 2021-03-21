import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from './styles';

interface PBlockScreen {
    isShow: boolean;
}

const BlockScreen = ({ isShow }: PBlockScreen) => {
    if (isShow) {
        return (
          <Container>
            <CircularProgress />
          </Container>
        );
    }
    return null;
};

export default BlockScreen;
