import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified, ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 200rem;
  height: 54rem;
`;

const MainTrainTracksBridge = styled.div`
  ${ElementsCommonStyle};
  //outline: 1px dotted red;
  width: 100%;
  height: 17rem;

  span {
    &::before, &::after {
      content: '';
    }
    &:nth-of-type(1) {
      bottom: -122px;
      left: 147px;
      transform: rotate(68deg);
      width: 20px;
      height: 272px;
      background: #617886;
      &::before {
        bottom: 0;
        left: -30px;
        width: 30px;
        height: 100%;
        border-style: solid;
        border-width: 26px 30px 0 0;
        border-color: transparent #3e5662;
      }
      &::after {
        bottom: -50px;
        left: -48px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 260px 20px;
        border-color: #3e5662 transparent;
      }
    }
    &:nth-of-type(2) {
      bottom: 83px;
      left: 279px;
      width: 830px;
      height: 23px;
      background: #617886;
      transform: rotate(-4deg);
      &::before {
        bottom: 19px;
        left: -44px;
        width: 0;
        height: 100%;
        border-style: solid;
        border-width: 5px 0 0 874px;
        border-color: transparent #3e5662;
        border-radius: 17px 0 0 0;
      }
      &::after {
        bottom: -88px;
        left: 352px;
        width: 36px;
        height: 0;
        transform: rotate(-12deg);
        border-style: solid;
        border-width: 94px 8px 0;
        border-color: #617886 transparent;
      }
    }
    &:nth-of-type(3) {
      bottom: -16px;
      left: 203px;
      width: 36px;
      height: 0;
      transform: rotate(-12deg);
      border-style: solid;
      border-width: 54px 8px 0;
      border-color: #617886 transparent;
    }
  }
`;

const MainTrainTracks = styled.div`
  ${ElementsCommonStyle};
  //outline: 1px dotted blue;
  width: 100%;
  height: 17rem;

  span {
    &::before, &::after {
      content: '';
    }
    &::before,
    &::after {
      width: 100%;
      border-top: 2px solid black;
    }
    &:nth-of-type(1) {
      width: 202px;
      height: 70px;

      &::before {
        bottom: 29px;
        left: -5px;
        transform: rotate(-18deg);
      }
      &::after {
        bottom: 17px;
        left: 8px;
        transform: rotate(-21deg);
      }
    }
    &:nth-of-type(2) {
      left: 192px;
      width: 82px;
      height: 53px;
      bottom: 51px;

      &::before {
        bottom: 21px;
        transform: rotate(-22deg);
        left: -2px;
        width: 77%;
      }
      &::after {
        bottom: 14px;
        left: 8px;
        transform: rotate(-21deg);
        width: 83%;
      }
    }
    &:nth-of-type(3) {
      left: 248px;
      width: 1082px;
      height: 60px;
      bottom: 70px;

      &::before, &::after {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 1px 0 1px 815px;
        border-color: transparent black;
      }

      &::before {
        bottom: 42px;
        transform: rotate(-4deg);
        left: 2px;
      }
      &::after {
        bottom: 37px;
        left: 15px;
        transform: rotate(-4.3deg);
      }
    }
  }
`;

export {
  Wrapper,
  MainTrainTracksBridge,
  MainTrainTracks
};
