import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrap = styled.div`
  background: ${(p) => p.theme.baseColor3};
  height: 40vh;
  margin-top: 80px;
`;

const FooterInner = styled.div`
  max-width: ${(p) => p.theme.layout.width}px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  color: ${(p) => p.theme.subColor};
  p {
    text-align: center;
  }
  a {
    color: ${(p) => p.theme.subText};
    font-size: ${(p) => p.theme.FONT.MEDIUM}rem;
  }
  a:hover {
    color: ${(p) => p.theme.subColor};
  }
`;

const FooterNav = styled.nav`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 90%;
`;

const Footer: FC = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <FooterNav>
          <div>
            <h3>About</h3>
            <ul>
              <li>
                <a href='/#'>About us</a>
              </li>
              <li>
                <a href='/#'>Therms</a>
              </li>
              <li>
                <a href='/#'>Top</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>ポリシー</h3>
            <ul>
              <li>
                <a href='/#'>リーガル</a>
              </li>
              <li>
                <a href='/#'>プライバシーポリシー</a>
              </li>
              <li>
                <a href='/#'>会社概要</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>コミュニティ</h3>
            <ul>
              <li>
                <a href='/#'>サポート</a>
              </li>
              <li>
                <a href='/#'>よくある質問</a>
              </li>
              <li>
                <a href='/#'>ブログ</a>
              </li>
            </ul>
          </div>
        </FooterNav>
        <p>
          Copyright &copy; 2020 <Link to='/'>InFaste</Link>. All rights
          reserved.
        </p>
      </FooterInner>
    </FooterWrap>
  );
};

export { Footer };
