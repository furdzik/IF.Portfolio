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

const RoundDecoration = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow: 1px 1px 23px 2px rgb(255 255 255 / 36%), 1px 1px 10px 2px rgb(0 0 0 / 35%);
  background: rgb(255 255 255 / 35%);
`;

const RoundDecorationOne = styled(RoundDecoration)`
  border: 3px solid #d12665;
  top: 70px;
  left: -54px;
`;

const RoundDecorationTwo = styled(RoundDecoration)`
  border: 3px solid #d12665;
  top: 70px;
  left: -54px;
`;

const RoundDecorationThree = styled(RoundDecoration)`
  border: 3px solid #d12665;
  top: 70px;
  left: -54px;
`;

const RoundDecorationFour = styled(RoundDecoration)`
  border: 3px solid #8e26d1;
  bottom: -39px;
  right: 21px;
  box-shadow: 1px 1px 23px 2px rgb(255 255 255 / 36%), 1px 1px 10px 2px rgb(255 255 255 / 35%);
`;

const StarDecorationOne = styled(StarDecoration)`
  position: absolute;
  top: 14px;
  left: -35px;
  transform: rotate(-66deg);
`;

const StarDecorationTwo = styled(StarDecoration)`
  position: absolute;
  top: -21px;
  left: -47px;
  transform: rotate(-66deg);
`;

const StarDecorationThree = styled(StarDecoration)`
  position: absolute;
  top: -23px;
  left: -18px;
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
