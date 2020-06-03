import React, { useEffect } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  height: 66px;
  background: ${(p) => p.theme.primaryColor};
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);

  .header-inner {
    max-width: ${p => p.theme.layout.width}px;
    margin: 0 auto;
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
      </div>
    </HeaderWrap>
  );
};

export default Header;
