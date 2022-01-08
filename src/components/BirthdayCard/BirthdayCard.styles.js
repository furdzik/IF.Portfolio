import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
`;

const Card = styled.div`
  position: relative;
  width: 64rem;
  height: 64rem;
  margin-top: 4rem;
  border: 2px solid ${(props) => props.theme.color.gray};
  background: ${(props) => props.theme.monoColors.white};
  text-align: center;
`;

const Header = styled.h1`
  margin-top: 4rem;
  font-size: 3.4rem;
  letter-spacing: .1rem;
  color: #737373;
  text-transform: uppercase;
`;

const SubHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.4rem;
  font-weight: bold;
  letter-spacing: .5rem;
  color: #d27310;
  text-transform: uppercase;


  &::before,
  &::after {
    content: '';
    width: 9rem;
    height: 0;
    margin: 0 2rem 0 1.5rem;
    border-top: 1px solid;
    color: #737373;
  }
`;

const Present = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 19rem;
  overflow: hidden;
  width: 27rem;
  height: 20rem;
  background: #cfe2e0;
  &::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: -3.5rem;
    transform: rotate(45deg);
    width: 129%;
    height: 32rem;
    background-image: radial-gradient(#bddbd9 37%,transparent 34%);
    background-size: 8rem 6.5rem;
    background-position: 0 0;
  }
`;

export {
  Wrapper,
  Card,
  Header,
  SubHeader,
  Present
};
