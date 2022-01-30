import styled from '@emotion/styled';

const Wrapper = styled.span`
  position: absolute;
  display: block;
  width: ${(props) => props.size * 2}px;
  height: ${(props) => props.size * 2}px;
`;

const StarWrapper = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;

  &::before, &:after {
    content: '';
    position: absolute;
    display: block;

    background: ${(props) => props.color};
    border-radius: 50%;
  }
  &::before {
    top: 5.5%;
    left: 44%;
    width: 14%;
    height: 89%;
  }
  &:after {
    width: 89%;
    height: 14%;
    top: 44%;
    left: 5.5%;
  }

  span {
    position: absolute;
    display: block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    overflow: hidden;
    &::before {
      content: '';
      display: block;
      width: 200%;
      height: 200%;
      position: absolute;
      border-radius: 50%;
    }
    &:nth-of-type(1) {
      top: 0;
      left: 0;
      &::before {
        bottom: 0;
        right: 0;
        box-shadow: ${(props) => props.size / 2}px ${(props) => props.size / 2}px 0 0 ${(props) => props.color};
      }
    }
    &:nth-of-type(2) {
      top: 0;
      right: 0;
      &::before {
        bottom: 0;
        left: 0;
        box-shadow: -${(props) => props.size / 2}px ${(props) => props.size / 2}px 0 0 ${(props) => props.color};
      }
    }
    &:nth-of-type(3) {
      bottom: 0;
      left: 0;
      &::before {
        top: 0;
        right: 0;
        box-shadow: ${(props) => props.size / 2}px -${(props) => props.size / 2}px 0 0 ${(props) => props.color};
      }
    }
    &:nth-of-type(4) {
      right: 0;
      bottom: 0;
      &::before {
        top: 0;
        left: 0;
        box-shadow: -${(props) => props.size / 2}px -${(props) => props.size / 2}px 0 0 ${(props) => props.color};
      }
    }
  }

`;

export {
  Wrapper,
  StarWrapper
};
