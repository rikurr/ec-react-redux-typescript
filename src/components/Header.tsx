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
  a {
    margin-right: 10px;
  }
  .header-icon {
    fill: ${(p) => p.theme.primaryColor};
    width: 17px;
    height: 17px;
    stroke: #333;
    stroke-width: 1;
  }
  span {
    font-size: ${(p) => p.theme.FONT.TINY}rem;
  }
`;

const ResponsivNav = styled.div`
  display: none;
  width: 60px;
  height: 50px;
  position: fixed;
  top: 20px;
  right: 0;
  padding-top: 10px;
  z-index: 100;

  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: ${(p) => p.theme.baseColor3};
    margin: 0 auto;
    margin-top: 15px;
  }
  span:before,
  span:after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: ${(p) => p.theme.baseColor3};
    margin: 0 auto;
  }

  span:before {
    margin-top: -7px;
  }
  span:after {
    margin-top: 7px;
  }

  @media (min-width: 480px) {
    display: none;
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
          <Link to='/shop/men'>メンズ</Link>
          <Link to='/shop/women'>レディース</Link>
        </div>
        <ResponsivNav>
          <span />
        </ResponsivNav>
        <HeaderNavWrap>
          {userState.isLogin ? <HeaderLoginedNav /> : <HeaderNav />}
        </HeaderNavWrap>
      </div>
    </HeaderWrap>
  );
};

export default Header;
