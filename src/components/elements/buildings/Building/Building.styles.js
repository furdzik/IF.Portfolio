import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Wrapper = styled.div`
  --blockWidth: ${(props) => props.width}rem;
  --blockHeight: ${(props) => props.height}rem;
  --blockHalfWidth: calc(var(--blockWidth) / 2);
  --blockHalfHeight: calc(var(--blockHeight) / 2);
  --blockMinusHalfWidth: calc(0rem - (var(--blockWidth) / 2));
  --blockMinusHalfHeight: calc(0rem - (var(--blockHeight) / 2));

  width: var(--blockWidth);
  height: var(--blockHeight);
  perspective: 100rem;
`;

const Cube = styled.div`
  position: relative;
  width: var(--blockWidth);
  height: var(--blockHeight);
  transform-style: preserve-3d;
  transform: ${(props) => props.transform};
`;

const Side = css`
  position: absolute;
  width: var(--blockWidth);
  height: var(--blockHeight);
`;

const BackSide = styled.div`
  ${Side};
  transform: translateZ(var(--blockMinusHalfWidth));
  background: ${(props) => props.frontBackSideColor};
`;

const LeftSide = styled.div`
  ${Side};
  transform: translateX(var(--blockMinusHalfWidth)) rotateY(90deg);
  background: ${(props) => props.leftRightSideColor};
`;

const RightSide = styled.div`
  ${Side};
  transform: translateX(var(--blockHalfWidth)) rotateY(90deg);
  background: ${(props) => props.leftRightSideColor};
`;

const TopSide = styled.div`
  ${Side};
  height: var(--blockWidth);
  transform: translateY(var(--blockMinusHalfWidth)) rotateX(90deg);
  background: ${(props) => props.topBottomSideColor};
`;

const BottomSide = styled.div`
  ${Side};
  height: var(--blockWidth);
  transform: translateY(var(--blockHeight)) translateZ(var(--blockMinusHalfWidth)) rotateX(90deg);
  transform-origin: top;
  background: ${(props) => props.topBottomSideColor};
`;

const FrontSide = styled.div`
  ${Side};
  transform: translateZ(var(--blockHalfWidth));
  background: ${(props) => props.frontBackSideColor};
`;

export {
  Wrapper,
  Cube,
  BackSide,
  LeftSide,
  RightSide,
  TopSide,
  BottomSide,
  FrontSide
};
