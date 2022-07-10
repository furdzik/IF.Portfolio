import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified, ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 140rem;
  height: 44rem;
`;

const MainTracks = styled.div`
  ${ElementsCommonStyle};
  width: 140rem;
  height: 17rem;
`;

const MainTrainTracksBridge = styled.div`
  ${ElementsCommonStyle};
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
        border-width: 26px 30px 0 0;
        border-style: solid;
        border-color: transparent #3e5662;
      }
      &::after {
        bottom: -50px;
        left: -48px;
        width: 0;
        height: 0;
        border-width: 0 0 260px 20px;
        border-style: solid;
        border-color: #3e5662 transparent;
      }
    }
    &:nth-of-type(2) {
      bottom: 83px;
      left: 279px;
      transform: rotate(-4deg);
      width: 830px;
      height: 23px;
      background: #617886;
      &::before {
        bottom: 19px;
        left: -44px;
        width: 0;
        height: 100%;
        border-width: 5px 0 0 874px;
        border-style: solid;
        border-color: transparent #3e5662;
        border-radius: 17px 0 0;
      }
      &::after {
        bottom: -88px;
        left: 352px;
        transform: rotate(-12deg);
        width: 36px;
        height: 0;
        border-width: 94px 8px 0;
        border-style: solid;
        border-color: #617886 transparent;
      }
    }
    &:nth-of-type(3) {
      bottom: -16px;
      left: 203px;
      transform: rotate(-12deg);
      width: 36px;
      height: 0;
      border-width: 54px 8px 0;
      border-style: solid;
      border-color: #617886 transparent;
    }
  }
`;

const MainTrainTracks = styled.div`
  ${ElementsCommonStyle};
  width: 100%;
  height: 17rem;

  span {
    &::before,
    &::after {
      content: '';
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
      bottom: 51px;
      left: 192px;
      width: 82px;
      height: 53px;
      &::before {
        bottom: 21px;
        left: -2px;
        transform: rotate(-22deg);
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
      bottom: 70px;
      left: 248px;
      width: 1082px;
      height: 60px;
      &::before, &::after {
        width: 0;
        height: 0;
        border-width: .5px 0 .5px 815px;
        border-style: solid;
        border-color: transparent black;
      }
      &::before {
        bottom: 42px;
        left: 2px;
        transform: rotate(-4deg);
      }
      &::after {
        bottom: 37px;
        left: 15px;
        transform: rotate(-4.3deg);
      }
    }
  }
`;

const WideTracks = styled.div`
  ${ElementsCommonStyle};
  width: 140rem;
  height: 44rem;
`;

const WideTrainTracksBridge = styled.div`
  ${ElementsCommonStyle};
  width: 100%;
  height: 100%;
  span {
    transform-style: preserve-3d;
    &::before, &::after {
      content: '';
    }
    &:nth-of-type(1) {
      right: 336px;
      bottom: -204px;
      transform: rotateY(18deg) rotateX(60deg) rotateZ(-30deg);
      width: 20px;
      height: 640px;
      background: #7c8e99;
      &::before {
        bottom: -27px;
        left: 17px;
        width: 75px;
        height: 108%;
        background: #3e5662;
      }
      &::after {
        bottom: -93px;
        left: 89px;
        width: 0;
        height: 0;
        border-width: 0 170px 758px 0;
        border-style: solid;
        border-color: #3e5662 transparent;
      }
    }
    &:nth-of-type(2) {
      right: 1017px;
      bottom: -140px;
      transform: rotate(-81deg);
      width: 10px;
      height: 924px;
      background: #617886;
      &::before {
        bottom: -27px;
        left: 9px;
        width: 23px;
        height: 108%;
        background: #3e5662;
      }
      &::after {
        bottom: -28px;
        left: 30px;
        width: 0;
        height: 0;
        border-width: 0 15px 630px 0;
        border-style: solid;
        border-color: #3e5662 transparent;
      }
    }
    &:nth-of-type(3) {
      right: 516px;
      bottom: 173px;
      transform: rotate(19deg);
      width: 36px;
      height: 0;
      border-width: 54px 8px 0;
      border-style: solid;
      border-color: #7c8e99 transparent;
    }
    &:nth-of-type(4) {
      right: 858px;
      bottom: 251px;
      transform: rotate(-13deg);
      width: 24px;
      height: 0;
      border-width: 48px 4px 0;
      border-style: solid;
      border-color: #617886 transparent;
    }
    &:nth-of-type(5) {
      right: 1064px;
      bottom: 282px;
      transform: rotate(19deg);
      width: 24px;
      height: 0;
      border-width: 48px 4px 0;
      border-style: solid;
      border-color: #617886 transparent;
    }
    &:nth-of-type(6) {
      right: 1294px;
      bottom: 317px;
      transform: rotate(19deg);
      width: 24px;
      height: 0;
      border-width: 48px 4px 0;
      border-style: solid;
      border-color: #617886 transparent;
    }
  }
`;

const WideTrainTracks = styled.div`
  ${ElementsCommonStyle};
  width: 140rem;
  height: 44rem;
  span {
    &::before,
    &::after {
      content: '';
      height: 100%;
      border-left: 1px solid black;
    }
    &:nth-of-type(1) {
      right: 197px;
      bottom: -227px;
      transform: rotate(-66deg);
      width: 20px;
      height: 703px;
      &::before {
        bottom: 22px;
        left: 1px;
        transform: rotate(1deg);
      }
      &::after {
        bottom: 17px;
        left: 15px;
      }
    }
    &:nth-of-type(2) {
      right: 216px;
      bottom: -267px;
      transform: rotate(-62deg);
      width: 20px;
      height: 703px;
      &::before {
        bottom: 22px;
        left: 1px;
        transform: rotate(1deg);
      }
      &::after {
        bottom: 17px;
        left: 15px;
      }
    }
    &:nth-of-type(3) {
      right: 827px;
      bottom: 3px;
      transform: rotate(-81deg);
      width: 20px;
      height: 625px;
      &::before {
        bottom: 23px;
        left: 10px;
        transform: rotate(-1deg);
      }
      &::after {
        bottom: 14px;
        left: 15px;
        transform: rotate(-1deg);
      }
    }
    &:nth-of-type(4) {
      right: 1299px;
      bottom: 228px;
      transform: rotate(-80deg);
      width: 10px;
      height: 321px;
      &::before {
        bottom: 23px;
        left: 0;
        transform: rotate(-1deg);
      }
      &::after {
        bottom: 14px;
        left: 5px;
        transform: rotate(-1deg);
      }
    }
    &:nth-of-type(5) {
      right: 834px;
      bottom: -10px;
      transform: rotate(-80deg);
      width: 20px;
      height: 625px;
      &::before {
        bottom: 23px;
        left: 10px;
        transform: rotate(-1deg);
      }
      &::after {
        bottom: 14px;
        left: 15px;
        transform: rotate(-1.2deg);
      }
    }
    &:nth-of-type(6) {
      right: 1305px;
      bottom: 221px;
      transform: rotate(-80deg);
      width: 10px;
      height: 321px;
      &::before {
        bottom: 23px;
        left: 0;
        transform: rotate(-1deg);
      }
      &::after {
        bottom: 14px;
        left: 4px;
        transform: rotate(-1deg);
      }
    }
  }
`;

export {
  Wrapper,
  MainTracks,
  MainTrainTracksBridge,
  MainTrainTracks,
  WideTracks,
  WideTrainTracksBridge,
  WideTrainTracks
};
