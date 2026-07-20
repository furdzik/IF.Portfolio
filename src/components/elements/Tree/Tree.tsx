import React from 'react';

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
} from './Tree.styles';

interface TreeProps {
  className?: string;
  color?: 'pink' | 'green';
  isTaller?: boolean;
}

const Tree = ({ className = '', color = 'pink', isTaller = false }: TreeProps) => (
  <Wrapper
    className={className}
    isTaller={isTaller}
  >

    <Trunk isTaller={isTaller}>
      <TrunkMain isTaller={isTaller} />
      <BranchOne color={color}>
        <span /><span /><span /><span />
        <BranchOneLeafsOne color={color} variant="two" />
        <BranchOneLeafsTwo color={color} variant="one" />
        <BranchOneLeafsThree color={color} variant="two" />
        <BranchOneLeafsFour color={color} variant="three" />
        <BranchOneLeafsFive color={color} variant="one" />
        <BranchOneLeafsSix color={color} variant="two" />
      </BranchOne>
      <BranchTwo color={color}>
        <span /><span /><span /><span /><span />
        <BranchTwoLeafsOne color={color} variant="one" />
        <BranchTwoLeafsTwo color={color} variant="two" />
        <BranchTwoLeafsThree color={color} variant="three" />
        <BranchTwoLeafsFour color={color} variant="two" />
        <BranchTwoLeafsFive color={color} variant="three" />
        <BranchTwoLeafsSix color={color} variant="one" />
        <BranchTwoLeafsSeven color={color} variant="three" />
        <BranchTwoLeafsEight color={color} variant="two" />
      </BranchTwo>
      <BranchThree color={color}>
        <span /><span /><span /><span /><span />
        <BranchThreeLeafsOne color={color} variant="two" />
        <BranchThreeLeafsTwo color={color} variant="one" />
        <BranchThreeLeafsThree color={color} variant="three" />
        <BranchThreeLeafsFour color={color} variant="one" />
        <BranchThreeLeafsFive color={color} variant="two" />
        <BranchThreeLeafsSix color={color} variant="three" />
        <BranchThreeLeafsSeven color={color} variant="one" />
        <BranchThreeLeafsEight color={color} variant="two" />
        <BranchThreeLeafsNine color={color} variant="three" />
      </BranchThree>
      <BranchFour color={color}>
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span />
        <BranchFourLeafsOne color={color} variant="one" />
        <BranchFourLeafsTwo color={color} variant="three" />
        <BranchFourLeafsThree color={color} variant="two" />
        <BranchFourLeafsFour color={color} variant="one" />
        <BranchFourLeafsFive color={color} variant="one" />
        <BranchFourLeafsSix color={color} variant="three" />
        <BranchFourLeafsSeven color={color} variant="two" />
        <BranchFourLeafsEight color={color} variant="one" />
        <BranchFourLeafsNine color={color} variant="three" />
        <BranchFourLeafsTen color={color} variant="two" />
        <BranchFourLeafsEleven color={color} variant="one" />
        <BranchFourLeafsTwelve color={color} variant="two" />
        <BranchFourLeafsThirteen color={color} variant="one" />
        <BranchFourLeafsFourteen color={color} variant="three" />
        <BranchFourLeafsFifteen color={color} variant="two" />
        <BranchFourLeafsSixteen color={color} variant="one" />
      </BranchFour>
      <BranchFive color={color}>
        <span /><span /><span /><span /><span />
        <BranchFiveLeafsOne color={color} variant="one" />
        <BranchFiveLeafsTwo color={color} variant="two" />
        <BranchFiveLeafsThree color={color} variant="three" />
        <BranchFiveLeafsFour color={color} variant="one" />
        <BranchFiveLeafsFive color={color} variant="two" />
        <BranchFiveLeafsSix color={color} variant="one" />
        <BranchFiveLeafsSeven color={color} variant="three" />
        <BranchFiveLeafsEight color={color} variant="one" />
        <BranchFiveLeafsNine color={color} variant="one" />
      </BranchFive>
      <BranchSix color={color}>
        <span /><span /><span /><span /><span />
        <BranchSixLeafsOne color={color} variant="one" />
        <BranchSixLeafsTwo color={color} variant="two" />
        <BranchSixLeafsThree color={color} variant="two" />
        <BranchSixLeafsFour color={color} variant="one" />
        <BranchSixLeafsFive color={color} variant="three" />
        <BranchSixLeafsSix color={color} variant="two" />
        <BranchSixLeafsSeven color={color} variant="three" />
        <BranchSixLeafsEight color={color} variant="one" />
        <BranchSixLeafsNine color={color} variant="two" />
      </BranchSix>
      <BranchSeven color={color}>
        <span /><span /><span /><span /><span />
        <BranchSevenLeafsOne color={color} variant="one" />
        <BranchSevenLeafsTwo color={color} variant="two" />
        <BranchSevenLeafsThree color={color} variant="three" />
        <BranchSevenLeafsFour color={color} variant="three" />
        <BranchSevenLeafsFive color={color} variant="one" />
        <BranchSevenLeafsSix color={color} variant="two" />
        <BranchSevenLeafsSeven color={color} variant="three" />
        <BranchSevenLeafsEight color={color} variant="one" />
      </BranchSeven>
      <BranchEight color={color}>
        <span /><span /><span /><span /><span />
        <span />
        <BranchEightLeafsOne color={color} variant="three" />
        <BranchEightLeafsTwo color={color} variant="one" />
        <BranchEightLeafsThree color={color} variant="two" />
        <BranchEightLeafsFour color={color} variant="one" />
        <BranchEightLeafsFive color={color} variant="three" />
        <BranchEightLeafsSix color={color} variant="one" />
        <BranchEightLeafsSeven color={color} variant="three" />
        <BranchEightLeafsEight color={color} variant="two" />
        <BranchEightLeafsNine color={color} variant="three" />
        <BranchEightLeafsTen color={color} variant="one" />
      </BranchEight>
      <BranchNine color={color}>
        <span /><span /><span /><span /><span />
        <span />
        <BranchNineLeafsOne color={color} variant="three" />
        <BranchNineLeafsTwo color={color} variant="one" />
        <BranchNineLeafsThree color={color} variant="two" />
        <BranchNineLeafsFour color={color} variant="three" />
        <BranchNineLeafsFive color={color} variant="one" />
        <BranchNineLeafsSix color={color} variant="two" />
        <BranchNineLeafsSeven color={color} variant="one" />
        <BranchNineLeafsEight color={color} variant="two" />
        <BranchNineLeafsNine color={color} variant="three" />
        <BranchNineLeafsTen color={color} variant="one" />
      </BranchNine>
      <BranchTen color={color}>
        <span /><span /><span /><span /><span />
        <span />
        <BranchTenLeafsOne color={color} variant="two" />
        <BranchTenLeafsTwo color={color} variant="one" />
        <BranchTenLeafsThree color={color} variant="three" />
        <BranchTenLeafsFour color={color} variant="two" />
        <BranchTenLeafsFive color={color} variant="two" />
        <BranchTenLeafsSix color={color} variant="one" />
        <BranchTenLeafsSeven color={color} variant="three" />
        <BranchTenLeafsEight color={color} variant="two" />
        <BranchTenLeafsNine color={color} variant="three" />
      </BranchTen>
      <BranchEleven color={color}>
        <span /><span /><span /><span />
        <BranchElevenLeafsOne color={color} variant="one" />
        <BranchElevenLeafsTwo color={color} variant="three" />
        <BranchElevenLeafsThree color={color} variant="two" />
        <BranchElevenLeafsFour color={color} variant="one" />
        <BranchElevenLeafsFive color={color} variant="three" />
        <BranchElevenLeafsSix color={color} variant="two" />
        <BranchElevenLeafsSeven color={color} variant="one" />
      </BranchEleven>
    </Trunk>
  </Wrapper>
);

export default Tree;
