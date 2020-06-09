import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hats from '../images/categories/hats.jpg';
import grass from '../images/categories/sunglasses.jpg';
import shoes from '../images/categories/shoes.jpg';
import p1 from '../images/products/p1.jpg';
import p2 from '../images/products/p2.jpg';
import p3 from '../images/products/p3.jpg';

const CategoriesWrap = styled.section`
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
      background: ${(p) => p.theme.baseColor2};
      color: ${(p) => p.theme.baseText};
      font-weight: bold;
      opacity: 0.8;
    }
  }
  @media (max-width: 960px) {
    min-width: 50%;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const Categories = () => {
  return (
    <>
      <CategoriesWrap>
        <CategoryItem style={{ backgroundImage: `url(${shoes})` }}>
          <Link to='/shop/shoes'>
            <div className='category-item-inner'>
              <div>シューズ</div>
            </div>
          </Link>
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url(${grass})` }}>
          <Link to='/shop/sunglasses'>
            <div className='category-item-inner'>
              <div>サングラス</div>
            </div>
          </Link>
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url(${Hats})` }}>
          <Link to='/shop/men'>
            <div className='category-item-inner'>
              <div>メンズ</div>
            </div>
          </Link>
        </CategoryItem>
        <CategoryItem style={{ backgroundImage: `url(${grass})` }}>
          <Link to='/shop/women'>
            <div className='category-item-inner'>
              <div>レディース</div>
            </div>
          </Link>
        </CategoryItem>
      </CategoriesWrap>
    </>
  );
};

export default Categories;
