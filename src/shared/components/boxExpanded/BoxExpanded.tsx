import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { CSSProperties } from 'styled-components';

import {
    Container,
    BoxTitle,
    BoxInfo,
} from './styles';

interface PBoxExpanded {
    children: ReactNode;
    title: string;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    style?: CSSProperties;
}

const BoxExpanded = ({
 title,
 children,
 expanded,
 setExpanded,
 style,
}: PBoxExpanded) => (
  <Container style={style}>
    <BoxTitle onClick={() => setExpanded(!expanded)}>
      {title}
    </BoxTitle>
    {expanded ? (
      <BoxInfo>
        {children}
      </BoxInfo>
    ) : null}
  </Container>
);

BoxExpanded.defaultProps = {
    style: {},
};

export default BoxExpanded;
