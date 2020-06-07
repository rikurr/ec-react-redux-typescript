import React from 'react';
import styled from 'styled-components';
import { HeaderNav, HeaderLoginedNav } from './common';
import { Link } from 'react-router-dom';
import { selectUser } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

const HeaderWrap = styled.header`
  height: 66px;
  background: ${(p) => p.theme.primaryColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  .header-inner {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Branding = styled.h1`
  a {
    font-size: ${(p) => p.theme.FONT.XXXLARGE}rem;
    font-family: 'Acme', sans-serif;
    color: ${(p) => p.theme.subText};
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
    fill: ${(p) => p.theme.baseColor1};
    /* stroke: ${(p) => p.theme.baseColor1};
    stroke-width: 1; */
    width: 17px;
    height: 17px;
  }
  > div{
    margin-right: 15px;
  }
  span{
    color: ${(p) => p.theme.secondaryColor};

  }
`;
const Header = () => {
  const userState = useSelector(selectUser);
  return (
    <HeaderWrap>
      <div className='header-inner'>
        <Branding>
          <Link to='/'>InFaste</Link>
        </Branding>
        <HeaderNavWrap>
          {userState.isLogin ? <HeaderLoginedNav /> : <HeaderNav />}
        </HeaderNavWrap>
      </div>
    </HeaderWrap>
  );
};

export default Header;
