import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HeaderNav } from './common';

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
  font-size: ${(p) => p.theme.FONT.XXXLARGE}rem;
  font-family: 'Acme', sans-serif;
`;
const Header = () => {
  return (
    <HeaderWrap>
      <div className='header-inner'>
        <Branding>InFaste</Branding>
        <HeaderNav />
      </div>
    </HeaderWrap>
  );
};

export default Header;
