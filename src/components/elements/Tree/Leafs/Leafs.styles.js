import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const pinkColor1 = '#f3d0dd';
const pinkColor2 = '#dcadbe';
const pinkColor3 = '#eabfcf';
const pinkColor4 = '#e8b5c8';
const pinkColor5 = '#efa5c0';
const pinkColor6 = '#da8ca9';
const pinkColor7 = '#ad8e99';

const greenColor1 = '#97f5a6'; // 9be8a7
const greenColor2 = '#33ca6c';
const greenColor3 = '#6eb879';
const greenColor4 = '#7dc787';
const greenColor5 = '#23ac55';
const greenColor6 = '#6cce7c';
const greenColor7 = '#5e9469'; // #80ef92

const Wrapper = styled.span`
  ${ElementsCommonStyleUnspecified};
  position: relative;
  z-index: 100;
  width: 16px;
  height: 16px;
`;

const Leaf = css`
  width: 100%;
  height: 100%;

  &::before, &::after {
    content: '';
  }
`;

const LeafOne = styled.span`
  ${Leaf};
  &::before {
    top: 50%;
    left: calc(50% - 4px);
    transform: rotate(-45deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor4 : pinkColor3};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor7 : pinkColor5};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor3 : pinkColor7};
    `};
  }
  &::after {
    top: 50%;
    left: calc(50% - 4px);
    transform: rotate(-12deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor5 : pinkColor6};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor4 : pinkColor3};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor1 : pinkColor5};
    `};
  }
`;

const LeafTwo = styled.span`
  ${Leaf};
  &::before {
    top: 50%;
    left: calc(50% - 5px);
    transform: rotate(37deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor6 : pinkColor5};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor6 : pinkColor5};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor6 : pinkColor5};
    `};
  }
  &::after {
    top: 50%;
    left: calc(50% - 5px);
    transform: rotate(80deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor3 : pinkColor1};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor2 : pinkColor6};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor5 : pinkColor2};
    `};
  }
`;

const LeafThree = styled.span`
  ${Leaf};
  &::before {
    top: calc(50% - 1px);
    left: calc(50% - 5px);
    transform: rotate(124deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor2 : pinkColor2};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor3 : pinkColor4};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor5 : pinkColor1};
    `};
  }
  &::after {
    top: calc(50% - 2px);
    left: calc(50% - 5px);
    transform: rotate(168deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor1 : pinkColor4};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor4 : pinkColor4};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor7 : pinkColor4};
    `};
  }
`;

const LeafFour = styled.span`
  ${Leaf};
  &::before {
    top: calc(50% - 1px);
    left: calc(50% - 4px);
    transform: rotate(192deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor2 : pinkColor6};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor2 : pinkColor2};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor2 : pinkColor2};
    `};
  }
  &::after {
    top: calc(50% - 1px);
    left: calc(50% - 4px);
    transform: rotate(217deg) translate(-50%, -50%);
    z-index: 2;
    width: 8px;
    height: 4px;
    border-radius: 40px / 20px;

    ${(props) => props.variant === 'one' && css`
      background: ${props.color === 'green' ? greenColor5 : pinkColor2};
    `};
    ${(props) => props.variant === 'two' && css`
      background: ${props.color === 'green' ? greenColor3 : pinkColor6};
    `};
    ${(props) => props.variant === 'three' && css`
      background: ${props.color === 'green' ? greenColor5 : pinkColor7};
    `};
  }
`;

export {
  Wrapper,
  LeafOne,
  LeafTwo,
  LeafThree,
  LeafFour
};
