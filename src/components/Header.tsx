import React from 'react';
import styled from 'styled-components';
import { HeaderNav, HeaderLoginedNav } from './common';
import { Link } from 'react-router-dom';
import { selectUser } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

const HeaderWrap = styled.header`
  height: 90px;
  background: ${(p) => p.theme.baseColor1};
  border-bottom: 1px solid ${(p) => p.theme.baseColor3};

  .header-inner {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-left {
    display: flex;
    align-items: center;
    a {
      text-align: center;
      margin-right: 10px;
    }
  }
`;
const Branding = styled.h1`
  margin-right: 30px;
  a {
    font-size: ${(p) => p.theme.FONT.XXXLARGE}rem;
    font-family: 'Acme', sans-serif;
    margin-right: 0;
  }
`;

const HeaderNavWrap = styled.nav`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  a{
    margin-right: 20px;
  }
  .header-icon {
    fill: ${(p) => p.theme.primaryColor};
    /* stroke: ${(p) => p.theme.baseColor1};
    stroke-width: 1; */
    width: 17px;
    height: 17px;
  }
  > div{
    margin-right: 15px;
  }
  span{
    font-size: ${(p) => p.theme.FONT.TINY}rem;
  }
`;
const Header = () => {
  const userState = useSelector(selectUser);
  return (
    <HeaderWrap>
      <div className='header-inner'>
        <div className='header-left'>
          <Branding>
            <Link to='/'>InFaste</Link>
          </Branding>
          <Link to='/men'>メンズ</Link>
          <Link to='/women'>レディース</Link>
        </div>
        <HeaderNavWrap>
          {userState.isLogin ? <HeaderLoginedNav /> : <HeaderNav />}
        </HeaderNavWrap>
      </div>
    </HeaderWrap>
  );
};

export default Header;
