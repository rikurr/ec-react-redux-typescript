import React, { FC } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  wide?: boolean;
};

const LayoutWrap = styled.main<LayoutProps>`
  max-width: ${(p) => (p.wide ? 1200 : p.theme.layout.width)}px;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Layout: FC<LayoutProps> = ({ children, wide }) => {
  return <LayoutWrap wide={wide}>{children}</LayoutWrap>;
};

export { Layout };
