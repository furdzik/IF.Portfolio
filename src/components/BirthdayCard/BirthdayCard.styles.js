import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
`;

const Card = styled.div`
  position: relative;
  width: 64rem;
  height: 64rem;
  margin-top: 4rem;
  background: ${(props) => props.theme.monoColors.white};
  border: 2px solid ${(props) => props.theme.color.gray};
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3.4rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  margin-top: 4rem;
  color: #737373;
`;

const SubHeader = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .5rem;
  color: #d27310;

  &::before,
  &::after {
    color: #737373;
    border-top: 1px solid;
    width: 9rem;
    height: 0;
    margin: 0 2rem 0 1.5rem;
    content: '';
  }
`;

const Present = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 19rem;
  background: #cfe2e0;
  width: 27rem;
  height: 20rem;
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    top: -2rem;
    left: -3.5rem;
    background-image: radial-gradient(#bddbd9 37%,transparent 34%);
    background-position: 0 0;
    background-size: 8rem 6.5rem;
    height: 32rem;
    width: 129%;
    transform: rotate(45deg);
  }
`;

export {
  Wrapper,
  Card,
  Header,
  SubHeader,
  Present
};
