import styled from '@emotion/styled';
// import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Building from '@components/elements/buildings/Building';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 118px;
  height: 160px;
  outline: 1px dotted green;
`;

const StyledBuilding = styled(Building)`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  right: 17px;
`;

const SideWalk = styled.span`
  ${ElementsCommonStyleUnspecified};
`;

export {
  Wrapper,
  StyledBuilding,
  SideWalk
};
