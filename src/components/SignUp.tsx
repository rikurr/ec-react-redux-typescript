import React, { FC, useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  flashMessage,
  hasError,
  selectApp,
} from '../features/appSlice/appSlice';
import { Form, Input, Button, LiveValidateMessage } from './common';

type Value = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const dispatch = useDispatch();
  const appState = useSelector(selectApp);
  const [value, setValue] = useState<Value>({
    username: '',
    email: '',
    password: '',
  });
  const [isSend, setSend] = useState<boolean>(false);

  const { username, email, password } = value;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      username.trim() === ''
    ) {
      return dispatch(
        hasError('電子メールまたはパスワードが正しくありません。')
      );
    }
    setSend(true);
    setValue({
      username: '',
      email: '',
      password: '',
    });
    setSend(false);
    dispatch(flashMessage('アカウントを作成しました'));
    console.log('hello');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <p>新規作成</p>
      {appState.validateError && (
        <LiveValidateMessage>{appState.errorMessage}</LiveValidateMessage>
      )}
      <Input
        onChange={handleChange}
        type='type'
        name='username'
        value={username}
        placeholder='ユーザーネーム'
      />
      <Input
        onChange={handleChange}
        type='email'
        name='email'
        value={email}
        placeholder='email'
      />
      <Input
        onChange={handleChange}
        type='password'
        name='password'
        value={password}
        placeholder='password'
        autoComplete='off'
      />
      <Button disabled={isSend}>新規作成</Button>
    </Form>
  );
};

export default SignUp;
