import React from 'react';
import styled from 'styled-components';
import { Page } from './common';
import { Link } from 'react-router-dom';
import SignIN from './SignIn';
import SignUp from './SignUp';

const RootPath = styled.p`
  text-align: center;
`

const FormWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  .form-separate {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .form-separate:before,
  .form-separate:after {
    content: '';
    height: 1px;
    flex-grow: 1;
    background-color: #aaa;
  }

  .form-separate:before {
    margin-right: 10px;
  }
  .form-separate:after {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Login = () => {
  return (
    <Page title='Login' wide={true}>
      <RootPath>
        <Link to='/'>HOME</Link> >> ACCOUNT 
      </RootPath>
      <FormWrap>
        <SignIN />
        <SignUp />
      </FormWrap>
    </Page>
  );
};

export default Login;
