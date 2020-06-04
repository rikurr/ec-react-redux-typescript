import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 40%;
  padding: 40px 20px;
  margin-top: 20px;
`;
const Input = styled.input`
  padding: 12px 20px;
  border: 1px solid #aaa;
  margin-top: 20px;
  border-radius: 5px;
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

type Props = {
  isGoogleSignIn: boolean;
};

const getButtonStyles = (props: Props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return css`
    background: ${(p) => p.theme.primaryColor};
  `;
};
const Button = styled.button`
  margin-top: 20px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: ${(p) => p.theme.baseColor1};

  ${getButtonStyles}
  :hover {
    opacity: 0.8;
  }
`;

export { Input, Form, Button };
