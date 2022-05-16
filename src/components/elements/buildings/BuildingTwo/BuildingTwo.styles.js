import styled from '@emotion/styled';
// import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Building from '@components/elements/buildings/Building';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 133px;
  height: 190px;
  outline: 1px dotted green;
`;

const StyledBuilding = styled(Building)`
  ${ElementsCommonStyleUnspecified};
  bottom: 2rem;
  right: 3.2rem;
`;

const SideWalk = styled.span`
  ${ElementsCommonStyleUnspecified};
`;

export {
  Wrapper,
  StyledBuilding,
  SideWalk
};
