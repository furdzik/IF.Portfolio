import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Trunk,
  TrunkMain,
  BranchOne,
  BranchTwo,
  BranchThree,
  BranchFour,
  BranchFive,
  BranchSix,
  BranchSeven,
  BranchEight,
  BranchNine,
  BranchTen,
  BranchEleven,
  BranchOneLeafsOne,
  BranchOneLeafsTwo,
  BranchOneLeafsThree,
  BranchOneLeafsFour,
  BranchOneLeafsFive,
  BranchOneLeafsSix,
  BranchTwoLeafsOne,
  BranchTwoLeafsTwo,
  BranchTwoLeafsThree,
  BranchTwoLeafsFour,
  BranchTwoLeafsFive,
  BranchTwoLeafsSix,
  BranchTwoLeafsSeven,
  BranchTwoLeafsEight,
  BranchThreeLeafsOne,
  BranchThreeLeafsTwo,
  BranchThreeLeafsThree,
  BranchThreeLeafsFour,
  BranchThreeLeafsFive,
  BranchThreeLeafsSix,
  BranchThreeLeafsSeven,
  BranchThreeLeafsEight,
  BranchThreeLeafsNine,
  BranchFourLeafsOne,
  BranchFourLeafsTwo,
  BranchFourLeafsThree,
  BranchFourLeafsFour,
  BranchFourLeafsFive,
  BranchFourLeafsSix,
  BranchFourLeafsSeven,
  BranchFourLeafsEight,
  BranchFourLeafsNine,
  BranchFourLeafsTen,
  BranchFourLeafsEleven,
  BranchFourLeafsTwelve,
  BranchFourLeafsThirteen,
  BranchFourLeafsFourteen,
  BranchFourLeafsFifteen,
  BranchFourLeafsSixteen,
  BranchFiveLeafsOne,
  BranchFiveLeafsTwo,
  BranchFiveLeafsThree,
  BranchFiveLeafsFour,
  BranchFiveLeafsFive,
  BranchFiveLeafsSix,
  BranchFiveLeafsSeven,
  BranchFiveLeafsEight,
  BranchFiveLeafsNine,
  BranchSixLeafsOne,
  BranchSixLeafsTwo,
  BranchSixLeafsThree,
  BranchSixLeafsFour,
  BranchSixLeafsFive,
  BranchSixLeafsSix,
  BranchSixLeafsSeven,
  BranchSixLeafsEight,
  BranchSixLeafsNine,
  BranchSevenLeafsOne,
  BranchSevenLeafsTwo,
  BranchSevenLeafsThree,
  BranchSevenLeafsFour,
  BranchSevenLeafsFive,
  BranchSevenLeafsSix,
  BranchSevenLeafsSeven,
  BranchSevenLeafsEight,
  BranchEightLeafsOne,
  BranchEightLeafsTwo,
  BranchEightLeafsThree,
  BranchEightLeafsFour,
  BranchEightLeafsFive,
  BranchEightLeafsSix,
  BranchEightLeafsSeven,
  BranchEightLeafsEight,
  BranchEightLeafsNine,
  BranchEightLeafsTen,
  BranchNineLeafsOne,
  BranchNineLeafsTwo,
  BranchNineLeafsThree,
  BranchNineLeafsFour,
  BranchNineLeafsFive,
  BranchNineLeafsSix,
  BranchNineLeafsSeven,
  BranchNineLeafsEight,
  BranchNineLeafsNine,
  BranchNineLeafsTen,
  BranchElevenLeafsOne,
  BranchElevenLeafsTwo,
  BranchElevenLeafsThree,
  BranchElevenLeafsFour,
  BranchElevenLeafsFive,
  BranchElevenLeafsSix,
  BranchElevenLeafsSeven,
  BranchTenLeafsOne,
  BranchTenLeafsTwo,
  BranchTenLeafsThree,
  BranchTenLeafsFour,
  BranchTenLeafsFive,
  BranchTenLeafsSix,
  BranchTenLeafsSeven, BranchTenLeafsEight, BranchTenLeafsNine
} from './Tree.styles.js';

const Tree = (props) => (
  <Wrapper
    className={props.className}
    isTaller={props.isTaller}
  >

    <Trunk isTaller={props.isTaller}>
      <TrunkMain isTaller={props.isTaller} />
      <BranchOne color={props.color}>
        <span /><span /><span /><span />
        <BranchOneLeafsOne color={props.color} variant="two" />
        <BranchOneLeafsTwo color={props.color} variant="one" />
        <BranchOneLeafsThree color={props.color} variant="two" />
        <BranchOneLeafsFour color={props.color} variant="three" />
        <BranchOneLeafsFive color={props.color} variant="one" />
        <BranchOneLeafsSix color={props.color} variant="two" />
      </BranchOne>
      <BranchTwo color={props.color}>
        <span /><span /><span /><span /><span />
        <BranchTwoLeafsOne color={props.color} variant="one" />
        <BranchTwoLeafsTwo color={props.color} variant="two" />
        <BranchTwoLeafsThree color={props.color} variant="three" />
        <BranchTwoLeafsFour color={props.color} variant="two" />
        <BranchTwoLeafsFive color={props.color} variant="three" />
        <BranchTwoLeafsSix color={props.color} variant="one" />
        <BranchTwoLeafsSeven color={props.color} variant="three" />
        <BranchTwoLeafsEight color={props.color} variant="two" />
      </BranchTwo>
      <BranchThree color={props.color}>
        <span /><span /><span /><span /><span />
        <BranchThreeLeafsOne color={props.color} variant="two" />
        <BranchThreeLeafsTwo color={props.color} variant="one" />
        <BranchThreeLeafsThree color={props.color} variant="three" />
        <BranchThreeLeafsFour color={props.color} variant="one" />
        <BranchThreeLeafsFive color={props.color} variant="two" />
        <BranchThreeLeafsSix color={props.color} variant="three" />
        <BranchThreeLeafsSeven color={props.color} variant="one" />
        <BranchThreeLeafsEight color={props.color} variant="two" />
        <BranchThreeLeafsNine color={props.color} variant="three" />
      </BranchThree>
      <BranchFour color={props.color}>
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span />
        <BranchFourLeafsOne color={props.color} variant="one" />
        <BranchFourLeafsTwo color={props.color} variant="three" />
        <BranchFourLeafsThree color={props.color} variant="two" />
        <BranchFourLeafsFour color={props.color} variant="one" />
        <BranchFourLeafsFive color={props.color} variant="one" />
        <BranchFourLeafsSix color={props.color} variant="three" />
        <BranchFourLeafsSeven color={props.color} variant="two" />
        <BranchFourLeafsEight color={props.color} variant="one" />
        <BranchFourLeafsNine color={props.color} variant="three" />
        <BranchFourLeafsTen color={props.color} variant="two" />
        <BranchFourLeafsEleven color={props.color} variant="one" />
        <BranchFourLeafsTwelve color={props.color} variant="two" />
        <BranchFourLeafsThirteen color={props.color} variant="one" />
        <BranchFourLeafsFourteen color={props.color} variant="three" />
        <BranchFourLeafsFifteen color={props.color} variant="two" />
        <BranchFourLeafsSixteen color={props.color} variant="one" />
      </BranchFour>
      <BranchFive color={props.color}>
        <span /><span /><span /><span /><span />
        <BranchFiveLeafsOne color={props.color} variant="one" />
        <BranchFiveLeafsTwo color={props.color} variant="two" />
        <BranchFiveLeafsThree color={props.color} variant="three" />
        <BranchFiveLeafsFour color={props.color} variant="one" />
        <BranchFiveLeafsFive color={props.color} variant="two" />
        <BranchFiveLeafsSix color={props.color} variant="one" />
        <BranchFiveLeafsSeven color={props.color} variant="three" />
        <BranchFiveLeafsEight color={props.color} variant="one" />
        <BranchFiveLeafsNine color={props.color} variant="one" />
      </BranchFive>
      <BranchSix color={props.color}>
        <span /><span /><span /><span /><span />
        <BranchSixLeafsOne color={props.color} variant="one" />
        <BranchSixLeafsTwo color={props.color} variant="two" />
        <BranchSixLeafsThree color={props.color} variant="two" />
        <BranchSixLeafsFour color={props.color} variant="one" />
        <BranchSixLeafsFive color={props.color} variant="three" />
        <BranchSixLeafsSix color={props.color} variant="two" />
        <BranchSixLeafsSeven color={props.color} variant="three" />
        <BranchSixLeafsEight color={props.color} variant="one" />
        <BranchSixLeafsNine color={props.color} variant="two" />
      </BranchSix>
      <BranchSeven color={props.color}>
        <span /><span /><span /><span /><span />
        <BranchSevenLeafsOne color={props.color} variant="one" />
        <BranchSevenLeafsTwo color={props.color} variant="two" />
        <BranchSevenLeafsThree color={props.color} variant="three" />
        <BranchSevenLeafsFour color={props.color} variant="three" />
        <BranchSevenLeafsFive color={props.color} variant="one" />
        <BranchSevenLeafsSix color={props.color} variant="two" />
        <BranchSevenLeafsSeven color={props.color} variant="three" />
        <BranchSevenLeafsEight color={props.color} variant="one" />
      </BranchSeven>
      <BranchEight color={props.color}>
        <span /><span /><span /><span /><span />
        <span />
        <BranchEightLeafsOne color={props.color} variant="three" />
        <BranchEightLeafsTwo color={props.color} variant="one" />
        <BranchEightLeafsThree color={props.color} variant="two" />
        <BranchEightLeafsFour color={props.color} variant="one" />
        <BranchEightLeafsFive color={props.color} variant="three" />
        <BranchEightLeafsSix color={props.color} variant="one" />
        <BranchEightLeafsSeven color={props.color} variant="three" />
        <BranchEightLeafsEight color={props.color} variant="two" />
        <BranchEightLeafsNine color={props.color} variant="three" />
        <BranchEightLeafsTen color={props.color} variant="one" />
      </BranchEight>
      <BranchNine color={props.color}>
        <span /><span /><span /><span /><span />
        <span />
        <BranchNineLeafsOne color={props.color} variant="three" />
        <BranchNineLeafsTwo color={props.color} variant="one" />
        <BranchNineLeafsThree color={props.color} variant="two" />
        <BranchNineLeafsFour color={props.color} variant="three" />
        <BranchNineLeafsFive color={props.color} variant="one" />
        <BranchNineLeafsSix color={props.color} variant="two" />
        <BranchNineLeafsSeven color={props.color} variant="one" />
        <BranchNineLeafsEight color={props.color} variant="two" />
        <BranchNineLeafsNine color={props.color} variant="three" />
        <BranchNineLeafsTen color={props.color} variant="one" />
      </BranchNine>
      <BranchTen color={props.color}>
        <span /><span /><span /><span /><span />
        <span />
        <BranchTenLeafsOne color={props.color} variant="two" />
        <BranchTenLeafsTwo color={props.color} variant="one" />
        <BranchTenLeafsThree color={props.color} variant="three" />
        <BranchTenLeafsFour color={props.color} variant="two" />
        <BranchTenLeafsFive color={props.color} variant="two" />
        <BranchTenLeafsSix color={props.color} variant="one" />
        <BranchTenLeafsSeven color={props.color} variant="three" />
        <BranchTenLeafsEight color={props.color} variant="two" />
        <BranchTenLeafsNine color={props.color} variant="three" />
      </BranchTen>
      <BranchEleven color={props.color}>
        <span /><span /><span /><span />
        <BranchElevenLeafsOne color={props.color} variant="one" />
        <BranchElevenLeafsTwo color={props.color} variant="three" />
        <BranchElevenLeafsThree color={props.color} variant="two" />
        <BranchElevenLeafsFour color={props.color} variant="one" />
        <BranchElevenLeafsFive color={props.color} variant="three" />
        <BranchElevenLeafsSix color={props.color} variant="two" />
        <BranchElevenLeafsSeven color={props.color} variant="one" />
      </BranchEleven>
    </Trunk>
  </Wrapper>
);

Tree.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['pink', 'green']),
  isTaller: PropTypes.bool
};

Tree.defaultProps = {
  className: '',
  color: 'pink',
  isTaller: false
};

export default Tree;
