import styled from 'styled-components';

const ButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .3rem 2rem;
  height: 5.5rem;
  border: .3rem solid ${(props) => props.theme.color.pink};
  border-radius: 4rem;
  font-family: ${(props) => props.theme.fontFamily.roboto};
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fontWeight.ultraLight};
  color: ${(props) => props.theme.monoColors.black};
  transition: all ease .3s;

  &:hover {
    border: .3rem solid ${(props) => props.theme.color.darkPink};
    background: rgba(216, 112, 173, .1);
  }
`;

export {
  ButtonWrapper
};
