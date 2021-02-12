import styled from 'styled-components';

import { ElementsCommonStyleUnspecified } from '../../../styles/elementsCommonStyle.styles';

const AreaWrapper = styled.div`
  position: relative;
  width: 12.3rem;
  height: 18.6rem;
  box-shadow: .5rem 1.6rem 1.3rem -1.7rem #A5A3A3;
  //margin: 1rem 3rem 3rem 5rem;
`;

const MeWrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 100%;
  height: 100%;
`;

const Hair = styled.div`
  ${ElementsCommonStyleUnspecified};
  left: 0;
  top: 0;
  width: 100%;
  height: 11.2rem;

  span {
    top: 0;
    background: #eacb6e;
    &:nth-child(1) {
      width: 11.8rem;
      height: 100%;
      border-radius: 5.5rem / 8rem;
      background: #eacb6e; // #ecd48e, #ecd48e, #c0b3a1
    }
    &:nth-child(2) {
      left: 4.1rem;
      z-index: 2;
      width: 6.6rem;
      height: 5rem;
      border-radius: 5.1rem 10.3rem 5.1rem 5.1rem;
    }
    &:nth-child(3) {
      top: 3rem;
      left: 2.1rem;
      z-index: 2;
      width: 10.9rem;
      height: 3.2rem;
      transform: rotate(27deg);
      border-radius: 28.4rem 28.4rem 0 23rem / 8.3rem 18.1rem 8.3rem 4.9rem;
    }
    &:nth-child(4) {
      top: 5.5rem;
      right: 0;
      z-index: 2;
      width: .6rem;
      height: 3rem;
      transform: rotate(4deg);
      background: #FFFFFF;
    }
  }
`;

const HeadWrapper = styled.div`
   ${ElementsCommonStyleUnspecified};
   background: #ffd9bc; //#E7BC99;
   border-radius: 7.1rem / 8.9rem;
   height: 11rem;
   left: 2rem;
   top: 1rem;
   transform: rotate(6deg);
   width: 7.8rem;
`;

const Eyebrows = styled.div`
  ${ElementsCommonStyleUnspecified};
     height: 4px;
     left: 8px;
     top: 51px;
     width: 60px;
     span {
       border-radius: 24px 24px 24px 24px / 12px 12px 12px 12px;
       border-top: 2px solid #8a6522;
       height: 12px;
       top: 0;
       width: 24px;
       &:nth-child(1) {
         left:0;
         transform: rotate(9deg);
       }
       &:nth-child(2) {
         right:0;
         transform: rotate(-6deg);
       }
       }
`;

const Eyes = styled.div`
  ${ElementsCommonStyleUnspecified};
  height: 9px;
  left: 11px;
  top: 60px;
  width: 54px;
  z-index: 3;
  span {
    border-radius: 20px 20px 20px 20px;
    border-top: 3px solid #000000;
    height: 20px;
    width: 20px;
    top: 0;
    &:nth-child(1) {
      left: 0;
    }
    &:nth-child(2) {
      right: 0;
    }
  }
`;

const Nose = styled.div`
  ${ElementsCommonStyleUnspecified};
  border-bottom: 3px solid #D4A480;
  border-radius: 17px 17px 17px 17px / 10px 10px 10px 10px;
  height: 10px;
  left: 30px;
  top: 70px;
  width: 17px;
  z-index: 3;
`;

const Lips = styled.div`
  ${ElementsCommonStyleUnspecified};
  height: 11px;
  left: 20px;
  top: 85px;
  width: 40px;
  z-index: 1;
  span {
    &:nth-child(1) {
      border-bottom: 1px solid #D09F79;
      border-radius: 40px 40px 40px 40px / 20px 20px 20px 20px;
      height: 20px;
      top: -14px;
      width: 40px;
    }
    &:nth-child(2) {
      border-left: 1px solid #D09F79;
      border-radius: 6px 6px 6px 6px;
      height: 6px;
      top: -2px;
      width: 6px;
    }
    &:nth-child(3) {
      border-right: 1px solid #D09F79;
      border-radius: 6px 6px 6px 6px;
      height: 6px;
      top: -2px;
      width: 6px;
      right: 0;
    }
    &:nth-child(4) {
      background:#fff;
      border-radius: 30px 30px 30px 30px;
      height: 30px;
      left: 5px;
      top: -18px;
      width: 30px;
    }
    &:nth-child(5) {
      border-bottom: 2px solid #b50002;
      border-radius: 30px 30px 30px 30px;
      height: 30px;
      left: 5px;
      top: -18px;
      width: 30px;
    }
    &:nth-child(6) {
      background: #ffd9bc;
      border-bottom: 1px solid #b50002;
      border-radius: 40px 40px 40px 40px / 20px 20px 20px 20px;
      height: 26px;
      left: 2px;
      top: -20px;
      width: 38px;
      z-index: 1;
    }
  }
`;

const Ear = styled.div`
  ${ElementsCommonStyleUnspecified};
   background: #ffd9bc;
   border-radius: 17px 12px 20px 0;
   height: 16px;
   left: 95px;
   top: 70px;
   -moz-transform: rotate(11deg);
   -webkit-transform: rotate(11deg);
   -o-transform: rotate(11deg);
   -ms-transform: rotate(11deg);
   transform: rotate(11deg);
   width: 10px;
   z-index: 5;
`;

// /* dress */
// .clothes {
//   height: 74px;
//   top: 116px;
//   left: 0;
//   width: 100%;
//   z-index: 2;
//   span {
//   &:nth-child(1) {
//       background: #487791;
//       border-bottom: 1px dotted #FFFFFF;
//       height: 34px;
//       left: 43px;
//       width: 29px;
//       z-index: 2;
//     }
//   &:nth-child(2) {
//       border-color: #487791 transparent;
//       border-style: solid;
//       border-width: 0 30px 20px;
//       left: 28px;
//       top: 25px;
//       z-index: 1;
//     }
//   &:nth-child(3) {
//       border-color: #FFFFFF transparent;
//       border-style: solid;
//       border-width: 22px 11px 0;
//       left: 46px;
//       top: 0;
//       z-index: 3;
//     }
//   &:nth-child(4) {
//       border-left: 1px dotted #FFFFFF;
//       height: 14px;
//       left: 57px;
//       top: 21px;
//       z-index: 3;
//     }
//   }
// }
// /* arms */
// .arms {
//   z-index: 2;
//   height: 50px;
//   top: 116px;
//   span {
//     background: #487791;
//     width: 5px;
//     height: 30px;
//   &:nth-child(1) {
//       border-radius: 5px 5px 0 0;
//       right: 12px;
//       top: -6px;
//     }
//   &:nth-child(2) {
//       border-radius: 5px 5px 5px 5px;
//       right: 14px;
//       top: 11px;
//     }
//   &.hand {
//       background: #E7BC99;
//       border: 1px solid #E0BC9F;
//       border-radius: 3px 3px 3px 3px;
//       height: 8px;
//       width: 6px;
//       top: 29px;
//     }
//   }
// &.arm1 {
//     left: 17px;
//     width: 31px;
//     span {
//     &:nth-child(1) {
//         -moz-transform: rotate(54deg);
//         -webkit-transform: rotate(54deg);
//         -o-transform: rotate(54deg);
//         -ms-transform: rotate(54deg);
//         transform: rotate(54deg);
//       }
//     &:nth-child(2) {
//         -moz-transform: rotate(-51deg);
//         -webkit-transform: rotate(-51deg);
//         -o-transform: rotate(-51deg);
//         -ms-transform: rotate(-51deg);
//         transform: rotate(-51deg);
//       }
//     &.hand {
//         right: 3px;
//       }
//     }
//   }
// &.arm2 {
//     left: auto;
//     right: 0;
//     width: 57px;
//     span {
//     &:nth-child(1) {
//         -moz-transform: rotate(-54deg);
//         -webkit-transform: rotate(-54deg);
//         -o-transform: rotate(-54deg);
//         -ms-transform: rotate(-54deg);
//         transform: rotate(-54deg);
//         left: 12px;
//       }
//     &:nth-child(2) {
//         left: 14px;
//         -moz-transform: rotate(51deg);
//         -webkit-transform: rotate(51deg);
//         -o-transform: rotate(51deg);
//         -ms-transform: rotate(51deg);
//         transform: rotate(51deg);
//       }
//     &.hand {
//         left: 3px;
//       }
//     }
//   }
// &.wave span {
//   &:nth-child(2) {
//       left: 33px;
//       top: -6px;
//       -moz-transform: rotate(52deg);
//       -webkit-transform: rotate(52deg);
//       -o-transform: rotate(52deg);
//       -ms-transform: rotate(52deg);
//       transform: rotate(52deg);
//     }
//   &.hand {
//       left: 46px;
//       top: -9px;
//       -moz-transform: rotate(46deg);
//       -webkit-transform: rotate(46deg);
//       -o-transform: rotate(46deg);
//       -ms-transform: rotate(46deg);
//       transform: rotate(46deg);
//     }
//   }
// }
// /* legs */
// .legs {
//   z-index: 2;
//   height: 24px;
//   left: 50px;
//   top: 161px;
//   width: 16px;
// .leg {
//     background: #E7BC99;
//     width:5px;
//     height:24px;
//     left:0;
//     + .leg {
//       left: auto;
//       right: 0;
//     }
//     span {
//       /* skarpetka */
//     &:nth-child(1) {
//         background: #FFFFFF;
//         border: 1px solid #CFCDCD;
//         bottom: 0;
//         height: 5px;
//         width: 3px;
//       }
//       /* but */
//     &:nth-child(2) {
//         background: #487791;
//         border-radius: 10px 10px 10px 10px;
//         bottom: -4px;
//         height: 6px;
//         left: -2px;
//         width: 10px;
//       }
//     }
//   }
// }
// }
//
// /* omar */
// #omar-area {
//   position: absolute;
//   bottom: 3px;
//   left: 20px;
//   width: 50px;
//   height: 70px;
//   /* balloon position */
// .balloon {
//     left: -146px;
//     top: -84px;
//   }
//   /* cat */
//   #omar {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     div {
//       position: absolute;
//       bottom: 0;
//       background: #ccc;
//       border: 1px solid #bebebe;
//     }
//     span {
//       display: block;
//       position: absolute;
//       bottom: 0;
//     }
//     /* head */
//   .head {
//       width: 80%;
//       left: 5px;
//       height: 38px;
//       bottom: 32px;
//       border-radius: 30px;
//       z-index: 3;
//       span {
//         position: absolute;
//         top: 0;
//       &:nth-child(1), &:nth-child(2) {
//           border-color: #C2C1C1 transparent;
//           border-style: solid;
//           border-width: 0 9px 16px;
//           top:-11px;
//           width: 0;
//           height: 0;
//         }
//       &:nth-child(1) {
//           left:-2px;
//           -moz-transform: rotate(-31deg);
//           -webkit-transform: rotate(-31deg);
//           -o-transform: rotate(-31deg);
//           -ms-transform: rotate(-31deg);
//           transform: rotate(-31deg);
//         }
//       &:nth-child(2) {
//           right: -2px;
//           -moz-transform: rotate(31deg);
//           -webkit-transform: rotate(31deg);
//           -o-transform: rotate(31deg);
//           -ms-transform: rotate(31deg);
//           transform: rotate(31deg);
//         }
//       &:nth-child(3), &:nth-child(4) {
//           background: #737373;
//           top: 15px;
//           width: 4px;
//           height: 4px;
//           border-radius: 5px;
//         }
//       &:nth-child(3) {
//           left: 10px;
//         }
//       &:nth-child(4) {
//           right: 10px;
//         }
//       &:nth-child(5) {
//           left: 17px;
//           top: 20px;
//           background: #3f3f3f;
//           width: 6px;
//           height: 4px;
//           border-radius: 5px;
//         }
//       &:nth-child(6),
//       &:nth-child(7),
//       &:nth-child(8),
//       &:nth-child(9),
//       &:nth-child(10),
//       &:nth-child(11) {
//           width: 15px;
//           height: 1px;
//           background: #5E5E5E;
//         }
//       &:nth-child(6), &:nth-child(7), &:nth-child(8) {
//           left: -4px;
//         }
//       &:nth-child(9), &:nth-child(10), &:nth-child(11) {
//           right: -4px;
//         }
//       &:nth-child(6), &:nth-child(9) {
//           top: 22px;
//         }
//       &:nth-child(7), &:nth-child(10) {
//           top: 26px;
//         }
//       &:nth-child(8), &:nth-child(11) {
//           top: 30px;
//         }
//       &:nth-child(6) {
//           -moz-transform: rotate(13deg);
//           -webkit-transform: rotate(13deg);
//           -o-transform: rotate(13deg);
//           -ms-transform: rotate(13deg);
//           transform: rotate(13deg);
//         }
//       &:nth-child(7) {
//           -moz-transform: rotate(0deg);
//           -webkit-transform: rotate(0deg);
//           -o-transform: rotate(0deg);
//           -ms-transform: rotate(0deg);
//           transform: rotate(0deg);
//           margin-left: -1px;
//         }
//       &:nth-child(8) {
//           -moz-transform: rotate(-13deg);
//           -webkit-transform: rotate(-13deg);
//           -o-transform: rotate(-13deg);
//           -ms-transform: rotate(-13deg);
//           transform: rotate(-13deg);
//         }
//       &:nth-child(9) {
//           -moz-transform: rotate(-13deg);
//           -webkit-transform: rotate(-13deg);
//           -o-transform: rotate(-13deg);
//           -ms-transform: rotate(-13deg);
//           transform: rotate(-13deg);
//         }
//       &:nth-child(10) {
//           -moz-transform: rotate(0deg);
//           -webkit-transform: rotate(0deg);
//           -o-transform: rotate(0deg);
//           -ms-transform: rotate(0deg);
//           transform: rotate(0deg);
//           margin-right: -1px;
//         }
//       &:nth-child(11) {
//           -moz-transform: rotate(13deg);
//           -webkit-transform: rotate(13deg);
//           -o-transform: rotate(13deg);
//           -ms-transform: rotate(13deg);
//           transform: rotate(13deg);
//         }
//       }
//     }
//     /* torso */
//   .torso {
//       width: 100%;
//       height: 50px;
//       border-radius: 50px;
//       z-index: 1;
//     }
//     /* legs */
//   .legs1 {
//       z-index: 2;
//       height: 60px;
//       width: 100%;
//       span {
//         background: #C2C1C1;
//         border-color: #C2C1C1;
//         border-style: solid;
//       &:nth-child(1), &:nth-child(2) {
//           background: none;
//           border-radius: 12px;
//           height: 50px;
//           width: 32px;
//           bottom: -3px;
//         }
//       &:nth-child(1) {
//           border-right-width: 15px;
//           left: -22px;
//           -moz-transform: rotate(10deg);
//           -webkit-transform: rotate(10deg);
//           -o-transform: rotate(10deg);
//           -ms-transform: rotate(10deg);
//           transform: rotate(10deg);
//         }
//       &:nth-child(2) {
//           border-left-width: 15px;
//           left: 25px;
//           -moz-transform: rotate(-10deg);
//           -webkit-transform: rotate(-10deg);
//           -o-transform: rotate(-10deg);
//           -ms-transform: rotate(-10deg);
//           transform: rotate(-10deg);
//         }
//       &:nth-child(3), &:nth-child(4) {
//           width: 10px;
//           height: 8px;
//           border-radius: 20px;
//           bottom: -5px;
//         }
//       &:nth-child(3) {
//           left: 4px;
//         }
//       &:nth-child(4) {
//           left: 36px;
//         }
//       }
//     }
//   .legs2 {
//       span {
//         background: #ccc;
//         border-color: #ccc;
//         border-style: solid;
//       &:nth-child(1), &:nth-child(2) {
//           width: 24px;
//           height: 12px;
//           border-radius: 20px;
//           bottom: 0px;
//           z-index: 0;
//         }
//       &:nth-child(1) {
//           left: 0;
//         }
//       &:nth-child(2) {
//           left: 29px;
//         }
//       }
//     }
//     /* tail */
//   .tail {
//       border: none;
//       background: none;
//       span {
//         background: #ccc;
//         border: 1px solid #bebebe;
//       &:nth-child(1) {
//           width: 13px;
//           height: 40px;
//           left: -17px;
//           border-radius: 40px 0 0 40px / 60px 0 0 60px;
//           -moz-transform: rotate(39deg);
//           -webkit-transform: rotate(39deg);
//           -o-transform: rotate(39deg);
//           -ms-transform: rotate(39deg);
//           transform: rotate(39deg);
//         }
//       &:nth-child(2) {
//           width: 13px;
//           height: 21px;
//           left: -21px;
//           border-radius: 40px 0 0 40px / 60px 0 0 60px;
//           -moz-transform: rotate(-10deg);
//           -webkit-transform: rotate(-10deg);
//           -o-transform: rotate(-10deg);
//           -ms-transform: rotate(-10deg);
//           transform: rotate(-10deg);
//           bottom: -3px;
//         }
//       &:nth-child(3) {
//           border: none;
//           width: 12px;
//           height: 12px;
//           left: -17px;
//           border-radius: 40px 0 0 40px / 60px 0 0 60px;
//           -moz-transform: rotate(31deg);
//           -webkit-transform: rotate(31deg);
//           -o-transform: rotate(31deg);
//           -ms-transform: rotate(31deg);
//           transform: rotate(31deg);
//           bottom: 14px;
//         }
//       &:nth-child(4) {
//           border: none;
//           width: 12px;
//           height: 12px;
//           left: -5px;
//           bottom: 17px;
//           border-radius: 20px;
//         }
//       &:nth-child(4) {
//           border:none;
//           width: 16px;
//           height: 16px;
//           left: -18px;
//           bottom: -4px;
//           border-radius: 20px;
//         }
//       &:nth-child(5) {
//           width: 8px;
//           height: 11px;
//           left: -13px;
//           bottom: 8px;
//           border-radius: 20px;
//           border: none;
//         }
//       &:nth-child(6),
//       &:nth-child(7),
//       &:nth-child(8),
//       &:nth-child(9),
//       &:nth-child(10),
//       &:nth-child(11),
//       &:nth-child(12),
//       &:nth-child(13),
//       &:nth-child(14),
//       &:nth-child(15) {
//           background: none;
//           width: 0;
//           height: 0;
//           border-color: #ccc transparent;
//           border-style: solid;
//           border-width: 8px 3px 0;
//         }
//       &:nth-child(6) {
//           left: -9px;
//           bottom: 30px;
//           -moz-transform: rotate(121deg);
//           -webkit-transform: rotate(121deg);
//           -o-transform: rotate(121deg);
//           -ms-transform: rotate(121deg);
//           transform: rotate(121deg);
//         }
//       &:nth-child(7) {
//           left: -19px;
//           bottom: 23px;
//           -moz-transform: rotate(96deg);
//           -webkit-transform: rotate(96deg);
//           -o-transform: rotate(96deg);
//           -ms-transform: rotate(96deg);
//           transform: rotate(96deg);
//         }
//       &:nth-child(8) {
//           left: -24px;
//           bottom: 14px;
//           -moz-transform: rotate(96deg);
//           -webkit-transform: rotate(96deg);
//           -o-transform: rotate(96deg);
//           -ms-transform: rotate(96deg);
//           transform: rotate(96deg);
//         }
//       &:nth-child(9) {
//           left: -25px;
//           bottom: 10px;
//           -moz-transform: rotate(66deg);
//           -webkit-transform: rotate(66deg);
//           -o-transform: rotate(66deg);
//           -ms-transform: rotate(66deg);
//           transform: rotate(66deg);
//         }
//       &:nth-child(10) {
//           left: -25px;
//           bottom: 5px;
//           -moz-transform: rotate(52deg);
//           -webkit-transform: rotate(52deg);
//           -o-transform: rotate(52deg);
//           -ms-transform: rotate(52deg);
//           transform: rotate(52deg);
//         }
//       &:nth-child(11) {
//           left: -22px;
//           bottom: -5px;
//           -moz-transform: rotate(33deg);
//           -webkit-transform: rotate(33deg);
//           -o-transform: rotate(33deg);
//           -ms-transform: rotate(33deg);
//           transform: rotate(33deg);
//         }
//       &:nth-child(12) {
//           left: -13px;
//           bottom: -9px;
//           -moz-transform: rotate(-24deg);
//           -webkit-transform: rotate(-24deg);
//           -o-transform: rotate(-24deg);
//           -ms-transform: rotate(-24deg);
//           transform: rotate(-24deg);
//         }
//       &:nth-child(13) {
//           left: -6px;
//           bottom: -7px;
//           -moz-transform: rotate(-51deg);
//           -webkit-transform: rotate(-51deg);
//           -o-transform: rotate(-51deg);
//           -ms-transform: rotate(-51deg);
//           transform: rotate(-51deg);
//         }
//       &:nth-child(14) {
//           left: -6px;
//           bottom: -2px;
//           -moz-transform: rotate(-46deg);
//           -webkit-transform: rotate(-46deg);
//           -o-transform: rotate(-46deg);
//           -ms-transform: rotate(-46deg);
//           transform: rotate(-46deg);
//         }
//       &:nth-child(15) {
//           left: -7px;
//           bottom: 8px;
//           -moz-transform: rotate(-82deg);
//           -webkit-transform: rotate(-82deg);
//           -o-transform: rotate(-82deg);
//           -ms-transform: rotate(-82deg);
//           transform: rotate(-82deg);
//         }
//       }
//     }
//   }
// }

export {
  AreaWrapper,
  MeWrapper,
  Hair,
  HeadWrapper,
  Eyebrows,
  Eyes,
  Nose,
  Lips,
  Ear
};
