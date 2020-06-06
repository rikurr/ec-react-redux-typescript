import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  flashMessage,
  hasError,
  selectApp,
} from '../features/appSlice/appSlice';
import { Form, Input, Button, LiveValidateMessage } from './common';
import { signInWithGoogle, auth } from '../db/firebase';

type Value = {
  email: string;
  password: string;
};

const SignIN = ({ history }: RouteComponentProps) => {
  const appState = useSelector(selectApp);
  const dispatch = useDispatch();
  const [value, setValue] = useState<Value>({
    email: '',
    password: '',
  });
  const [isSend, setSend] = useState<boolean>(false);

  const { email, password } = value;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSend(true);
    if (email.trim() === '' || password.trim() === '') {
      setSend(false);
      return dispatch(
        hasError('電子メールまたはパスワードが正しくありません。')
      );
    }
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSend(false);
      dispatch(flashMessage('ログインしました。'));
      history.push('/');
    } catch (error) {
      console.log('error login');
      setSend(false);
    }
    setValue({
      email: '',
      password: '',
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <p>ログイン</p>
      {appState.validateError && (
        <LiveValidateMessage>{appState.errorMessage}</LiveValidateMessage>
      )}
      <Input
        onChange={handleChange}
        name='email'
        type='email'
        placeholder='email'
        value={email}
      />
      <Input
        onChange={handleChange}
        type='password'
        name='password'
        value={password}
        placeholder='password'
        autoComplete='off'
      />
      <Button type='button' onClick={signInWithGoogle} isGoogleSignIn={true}>
        Sign in with Google
      </Button>
      <p className='form-separate'>または</p>
      <Button disabled={isSend} type='submit'>
        ログイン
      </Button>
    </Form>
  );
};

export default withRouter(SignIN);
