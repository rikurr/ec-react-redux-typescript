import React, { useEffect } from "react";
import styled from "styled-components";
import p1 from '../images/products/p8.jpg'
import { ProductButton } from './common';


const FeatureProducts = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 20px;

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
      grid-template-columns: 1fr 1fr;
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

const FeatureProduct = () => {
  return (
    <>
    <FeatureProductsTitle>Feature Products</FeatureProductsTitle>
      <FeatureProducts>
        <div>
          <Filters>
            <h2>フィルター</h2>
            <div className='all-filters'>
              <div className='filter-section'>
                <strong>カテゴリー</strong>
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
              style={{ backgroundImage: `url(${p1})` }}
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
        </div>
      </FeatureProducts>
      </>
  )
}

export default FeatureProduct
