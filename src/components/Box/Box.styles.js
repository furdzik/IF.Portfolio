import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 28rem;
  padding: 2rem 3rem 3rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.monoColors.white};
  box-shadow: 1px 1px 33px 2px rgb(255 255 255 / 21%), 1px 1px 10px 2px rgb(0 0 0 / 30%);
`;

const Slice = (props) => css`
  content: '';
  position: absolute;
  display: block;
  transform-origin: center;
  width: 0;
  height: 9rem;
  border-width: .7rem .5rem;
  border-style: solid;
  border-color: transparent ${props.theme.color.darkGray};
`;

const SliceCover = (props) => css`
  content: '';
  position: absolute;
  display: block;
  transform-origin: center;
  width: .5rem;
  height: 7.1rem;
  background: ${props.theme.color.darkGray};
`;

const TopLeftCorner = styled.div`
  &::before,
  &::after {
    transform: rotate(47deg);
  }
  &::before {
    ${Slice};
    top: -3rem;
    left: .3em;
  }
  &::after {
    ${SliceCover};
    top: -2rem;
    left: .4em;
  }
`;

const TopRightCorner = styled.div`
  &::before,
  &::after {
    transform: rotate(-47deg);
  }
  &::before {
    ${Slice};
    top: -3rem;
    right: .3em;
  }
  &::after {
    ${SliceCover};
    top: -2rem;
    right: .4em;
  }
`;
const BottomLeftCorner = styled.div`
  &::before,
  &::after {
    transform: rotate(-47deg);
  }
  &::before {
    ${Slice};
    bottom: -3rem;
    left: .3em;
  }
  &::after {
    ${SliceCover};
    bottom: -2rem;
    left: .4em;
  }
`;
const BottomRightCorner = styled.div`
  &::before,
  &::after {
    transform: rotate(47deg);
  }
  &::before {
    ${Slice};
    right: .3em;
    bottom: -3rem;
  }
  &::after {
    ${SliceCover};
    right: .4em;
    bottom: -2rem;
  }
`;

export {
  Wrapper,
  TopLeftCorner,
  TopRightCorner,
  BottomLeftCorner,
  BottomRightCorner
};
