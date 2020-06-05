import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  flashMessage,
  hasError,
  selectApp,
} from '../features/appSlice/appSlice';
import { Form, Input, Button, LiveValidateMessage } from './common';
import { signInWithGoogle } from '../db/firebase';

type Value = {
  email: string;
  password: string;
};

const SignIN = () => {
  const appState = useSelector(selectApp);
  const dispatch = useDispatch();
  const [value, setValue] = useState<Value>({
    email: '',
    password: '',
  });
  const [isSend, setSend] = useState<boolean>(false);

  const { email, password } = value;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return dispatch(hasError('電子メールまたはパスワードが正しくありません。'));
    }
    setSend(true);
    setValue({
      email: '',
      password: '',
    });
    setSend(false);
    dispatch(flashMessage('ログインしました。'));
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

export default SignIN;
