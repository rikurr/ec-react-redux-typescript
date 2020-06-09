import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  flashMessage,
  hasError,
  selectApp,
} from '../features/appSlice/appSlice';
import { Form, Input, Button, LiveValidateMessage } from './common';
import { auth, createUserDocument } from '../db/firebase';

type Value = {
  email: string;
  password: string;
};

const SignUp = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const appState = useSelector(selectApp);
  const [value, setValue] = useState<Value>({
    email: '',
    password: '',
  });
  const [isSend, setSend] = useState<boolean>(false);

  const { email, password } = value;

  const handleSubmit = async (e: FormEvent) => {
    setSend(true);
    e.preventDefault();
    if (
      email.trim() === '' ||
      password.trim() === ''
    ) {
      return dispatch(
        hasError('電子メールまたはパスワードが正しくありません。')
      );
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user);
      setValue({
        email: '',
        password: '',
      });
      setSend(false);
      dispatch(flashMessage('アカウントを作成しました'));
      history.push('/');
    } catch (error) {
      console.log('error create user');
      setSend(false);
    }
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

export default withRouter(SignUp);
