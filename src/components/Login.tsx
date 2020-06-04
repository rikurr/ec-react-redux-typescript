import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Page, Form, Input, Button } from './common';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../db/firebase';

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
        <Form>
          <p>ログイン</p>
          <Input type='email' placeholder='email' />
          <Input type='password' placeholder='password' />
          <Button onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with Google</Button>
          <p className='form-separate'>または</p>
          <Button isGoogleSignIn={false}>ログイン</Button>
        </Form>
        <Form>
          <p>新規作成</p>
          <Input type='type' placeholder='ユーザーネーム' />
          <Input type='email' placeholder='email' />
          <Input type='password' placeholder='password' />
          <Button isGoogleSignIn={false}>新規作成</Button>
        </Form>
      </FormWrap>
    </Page>
  );
};

export default Login;
