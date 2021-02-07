import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 30rem;
  margin-top: 5rem;
  padding: 2rem 3rem 3rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.monoColors.white};
  box-shadow: 1px 1px 10px 2px rgb(0 0 0 / 30%);
`;

const Slice = css`
  display: block;
  position: absolute;
  transform-origin: center;
  width: 0;
  height: 9rem;
  border-width: .7rem .5rem;
  border-style: solid;
  border-color: transparent ${(props) => props.theme.color.darkGray};
  content: '';
`;

const SliceCover = css`
  display: block;
  position: absolute;
  transform-origin: center;
  width: .3rem;
  height: 7.1rem;
  background: ${(props) => props.theme.color.darkGray};
  content: '';
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
    left: .3em;
    bottom: -3rem;
  }
  &::after {
    ${SliceCover};
    left: .4em;
    bottom: -2rem;
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
