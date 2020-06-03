import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Page } from './Page';
import Hats from '../images/categories/hats.jpg';
import grass from '../images/categories/sunglasses.jpg';
import shoes from '../images/categories/shoes.jpg';
import p1 from '../images/products/p1.jpg';
import p2 from '../images/products/p2.jpg';
import p3 from '../images/products/p3.jpg';
import { ProductButton } from './common';

const Categories = styled.section`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

const CategoryItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  min-width: 33.33%;
  border: 2px solid ${(p) => p.theme.baseColor1};
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.4s ease;
  background-position: center;
  :hover {
    transform: scale(1.01);
  }

  .category-item-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    > div {
      padding: 5px 10px;
      background: ${(p) => p.theme.baseColor3};
      color: ${(p) => p.theme.secondaryColor};
      font-weight: bold;
    }
  }
  @media (max-width: 960px) {
    min-width: 50%;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const FeatureProducts = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 20px;
  > div:first-child {
    border: 1px solid ${(p) => p.theme.baseColor3};
  }
  .feature-product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }

  .feature-product-item {
    border: 1px solid ${(p) => p.theme.baseColor2};
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
  }

  @media (max-width: 960px) {
    .feature-product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 800px) {
    .feature-product-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureProductsTitle = styled.h2`
  margin-top: 40px;
  text-align: center;
`;

const FeatureProductsItemImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const FeatureProductContent = styled.div`
  margin-top: 10px;
  text-align: center;
  h3 {
    text-align: center;
  }
  p {
    font-size: ${(p) => p.theme.FONT.BASE}rem;
    text-align: center;
  }
`;

const Filters = styled.div`
  background: ${(p) => p.theme.baseColor2};
  border: 1px solid ${(p) => p.theme.baseColor2};
  border-radius: 5px;
  padding: 20px;
  .filter-section {
    margin-top: 20px;
  }

  .filter-section > strong {
    margin-top: 10px;
    color: ${(p) => p.theme.primaryColor};
    display: block;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    .all-filters {
      display: flex;
      flex-wrap: wrap;
    }
    .filter-section {
      margin-right: 60px;
    }
  }
`;

const Filter = styled.label`
  display: block;
  margin-top: 5px;
`;

const Home = () => {
  return (
    <Page title='Home' wide={true}>
      <Categories>
        <CategoryItem style={{ backgroundImage: `url(${Hats})` }}>
          <div className='category-item-inner'>
            <div>Hats</div>
          </div>
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url(${grass})` }}>
          <div className='category-item-inner'>
            <div>Hats</div>
          </div>
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url(${shoes})` }}>
          <div className='category-item-inner'>
            <div>Hats</div>
          </div>
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url(${Hats})` }}>
          <div className='category-item-inner'>
            <div>Hats</div>
          </div>
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url(${grass})` }}>
          <div className='category-item-inner'>
            <div>Hats</div>
          </div>
        </CategoryItem>
      </Categories>

      <FeatureProductsTitle>Feature Products</FeatureProductsTitle>
      <FeatureProducts>
        <div>
          <Filters>
            <h2>Filters</h2>
            <div className='all-filters'>
              <div className='filter-section'>
                <strong>categories</strong>
                <Filter>
                  <input type='checkbox' /> Hats
                </Filter>
                <Filter>
                  <input type='checkbox' /> Shoes
                </Filter>
                <Filter>
                  <input type='checkbox' /> Sunglasses
                </Filter>
                <Filter>
                  <input type='checkbox' /> hooodi
                </Filter>
              </div>
              <div className='filter-section'>
                <strong>categories</strong>
                <Filter>
                  <input type='checkbox' /> Hats
                </Filter>
                <Filter>
                  <input type='checkbox' /> Shoes
                </Filter>
                <Filter>
                  <input type='checkbox' /> Sunglasses
                </Filter>
                <Filter>
                  <input type='checkbox' /> hooodi
                </Filter>
              </div>
            </div>
          </Filters>
        </div>
        <div className='feature-product-grid'>
          <div className='feature-product-item'>
            <FeatureProductsItemImage
              style={{ backgroundImage: `url(${p3})` }}
            ></FeatureProductsItemImage>
            <FeatureProductContent>
              <h3>フーディー</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <ProductButton>view item</ProductButton>
            </FeatureProductContent>
          </div>
          <div className='feature-product-item'>
            <FeatureProductsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProductsItemImage>
            <FeatureProductContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <ProductButton>view item</ProductButton>
            </FeatureProductContent>
          </div>
          <div className='feature-product-item'>
            <FeatureProductsItemImage
              style={{ backgroundImage: `url(${p2})` }}
            ></FeatureProductsItemImage>
            <FeatureProductContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <ProductButton>view item</ProductButton>
            </FeatureProductContent>
          </div>
          <div className='feature-product-item'>
            <FeatureProductsItemImage
              style={{ backgroundImage: `url(${p3})` }}
            ></FeatureProductsItemImage>
            <FeatureProductContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <ProductButton>view item</ProductButton>
            </FeatureProductContent>
          </div>
          <div className='feature-product-item'>
            <FeatureProductsItemImage
              style={{ backgroundImage: `url(${p1})` }}
            ></FeatureProductsItemImage>
            <FeatureProductContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <ProductButton>view item</ProductButton>
            </FeatureProductContent>
          </div>
          <div className='feature-product-item'>
            <FeatureProductsItemImage
              style={{ backgroundImage: `url(${p2})` }}
            ></FeatureProductsItemImage>
            <FeatureProductContent>
              <h3>title</h3>
              <p>
                ロンドンのストリート スタイルとハイ
                ファッションのコラボレーションから生まれた、美味しいスニーカー
              </p>
              <p>￥4200</p>
              <ProductButton>view item</ProductButton>
            </FeatureProductContent>
          </div>
        </div>
      </FeatureProducts>
    </Page>
  );
};

export default Home;
