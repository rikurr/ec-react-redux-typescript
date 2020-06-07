import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Button } from './Form';
import { auth } from '../../db/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/user/userSlice';

const NavButton = styled(Button)`
  margin: 0;
  background: transparent;
  padding: 0;
  a {
    color: ${(p) => p.theme.subText};
  }
`;



const HeaderLoginedNav = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
  };

  return (
    <>
      <div data-tip='お気に入り'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 32 32'
          className='header-icon'
        >
          <path d='M6 0v32l10-10 10 10V0z' />
        </svg>
      </div>
      <ReactTooltip />
      <div data-tip='cart'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 32 32'
          className='header-icon'
        >
          <title>cart</title>
          <path d='M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
          <path d='M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
          <path d='M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z'></path>
        </svg>{' '}
        <span>12</span>
      </div>
      <ReactTooltip />
      {user?.currrentUser?.role_id === 1 ? (
        <NavButton>
          <Link to='/admin'>管理画面</Link>
        </NavButton>
      ) : null}
      {user.isLogin && <NavButton onClick={handleLogout}>ログアウト</NavButton>}
    </>
  );
};

export { HeaderLoginedNav };
