import styled from '@emotion/styled';
import { css } from '@emotion/react';

import StarDecoration from '@components/elements/StarDecoration';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 28rem;
  padding: 2rem 3rem 3rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.monoColors.white};
  box-shadow: .1rem .1rem 3.3rem .2rem rgb(255 255 255 / 21%), .1rem .1rem 1rem .2rem rgb(0 0 0 / 30%);
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

const RoundDecoration = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: rgb(255 255 255 / 35%);
  box-shadow: .1rem .1rem 2.3rem .2rem rgb(255 255 255 / 36%), .1rem .1rem 1rem .2rem rgb(0 0 0 / 35%);
`;

const RoundDecorationOne = styled(RoundDecoration)`
  top: 7rem;
  left: -5.4rem;
  border: .3rem solid #d12665;
`;

const RoundDecorationTwo = styled(RoundDecoration)`
  top: 7rem;
  left: -5.4rem;
  border: .3rem solid #d12665;
`;

const RoundDecorationThree = styled(RoundDecoration)`
  top: 7rem;
  left: -5.4rem;
  border: .3rem solid #d12665;
`;

const RoundDecorationFour = styled(RoundDecoration)`
  right: 2.1rem;
  bottom: -3.9rem;
  border: .3rem solid #8e26d1;
  box-shadow: .1rem .1rem 2.3rem .2rem rgb(255 255 255 / 36%), .1rem .1rem 1rem .2rem rgb(255 255 255 / 35%);
`;

const StarDecorationOne = styled(StarDecoration)`
  position: absolute;
  top: 1.4rem;
  left: -3.5rem;
  transform: rotate(-66deg);
`;

const StarDecorationTwo = styled(StarDecoration)`
  position: absolute;
  top: -2.1rem;
  left: -4.7rem;
  transform: rotate(-66deg);
`;

const StarDecorationThree = styled(StarDecoration)`
  position: absolute;
  top: -2.3rem;
  left: -1.8rem;
  transform: rotate(-66deg);
`;

export {
  Wrapper,
  TopLeftCorner,
  TopRightCorner,
  BottomLeftCorner,
  BottomRightCorner,
  RoundDecorationOne,
  RoundDecorationTwo,
  RoundDecorationThree,
  RoundDecorationFour,
  StarDecorationOne,
  StarDecorationTwo,
  StarDecorationThree
};
