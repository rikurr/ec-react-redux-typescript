import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from './common';
import FeatureProduct from './FeatureProduct';
import heroImage from '../images/heroapparel.jpg'

const Hero = styled.div`
  background-image: url(${heroImage});
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 100px;
  color: ${(p) => p.theme.subText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${(p) => p.theme.FONT.XXXLARGE}rem;
  }
  a {
    width: 300px;
    font-size: ${(p) => p.theme.FONT.XLARGE}rem;
    color: ${(p) => p.theme.subText};
    border: 2px solid ${(p) => p.theme.subText};
    margin-top: 15px;
    text-align: center;
  }
`;


const Top = () => {
  return (
    <Page title='Top' wide={true}>
      <Hero>
        <h1>コレクションを見る</h1>
        <Link to='/shop/men'>メンズ</Link>
        <Link to='/shop/women'>レディース</Link>
      </Hero>
      <FeatureProduct />
    </Page>
  );
};

export default Top;
