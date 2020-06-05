import React from 'react';
import styled from 'styled-components';
import { Page } from './common';
import { Link } from 'react-router-dom';
import SignIN from './SignIn';
import SignUp from './SignUp';

const FormWrap = styled.div`
  display: flex;
  justify-content: space-around;
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
`;

const Login = () => {
  return (
    <Page title='Login' wide={true}>
      <p>
        <Link to='/'>HOME</Link> >> LOGIN
      </p>
      <FormWrap>
        <SignIN />
        <SignUp />
      </FormWrap>
    </Page>
  );
};

export default Login;
