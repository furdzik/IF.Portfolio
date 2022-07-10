import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Wrapper = styled.div`
  --block-width: ${(props) => props.width}rem;
  --block-height: ${(props) => props.height}rem;
  --block-half-width: calc(var(--block-width) / 2);
  --block-half-height: calc(var(--block-height) / 2);
  --block-minus-half-width: calc(0rem - (var(--block-width) / 2));
  --block-minus-half-height: calc(0rem - (var(--block-height) / 2));

  perspective: 100rem;
  width: var(--block-width);
  height: var(--block-height);
`;

const Cube = styled.div`
  position: relative;
  transform: ${(props) => props.transform};
  transform-style: preserve-3d;
  width: var(--block-width);
  height: var(--block-height);
`;

const Side = css`
  position: absolute;
  width: var(--block-width);
  height: var(--block-height);
`;

const BackSide = styled.div`
  ${Side};
  transform: translateZ(var(--block-minus-half-width));
  background: ${(props) => props.frontBackSideColor};
`;

const LeftSide = styled.div`
  ${Side};
  transform: translateX(var(--block-minus-half-width)) rotateY(90deg);
  background: ${(props) => props.leftRightSideColor};
`;

const RightSide = styled.div`
  ${Side};
  transform: translateX(var(--block-half-width)) rotateY(90deg);
  background: ${(props) => props.leftRightSideColor};
`;

const TopSide = styled.div`
  ${Side};
  transform: translateY(var(--block-minus-half-width)) rotateX(90deg);
  height: var(--block-width);
  background: ${(props) => props.topBottomSideColor};
`;

const BottomSide = styled.div`
  ${Side};
  transform: translateY(var(--block-height)) translateZ(var(--block-minus-half-width)) rotateX(90deg);
  transform-origin: top;
  height: var(--block-width);
  background: ${(props) => props.topBottomSideColor};
`;

const FrontSide = styled.div`
  ${Side};
  transform: translateZ(var(--block-half-width));
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
