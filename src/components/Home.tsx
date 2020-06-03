import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Page } from './Page';
import Hats from '../images/categories/hats.jpg';
import grass from '../images/categories/sunglasses.jpg';
import shoes from '../images/categories/shoes.jpg';

const Categories = styled.section`
  display: flex;
  flex-wrap: wrap;
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

  .category-item-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    > div {
      padding: 5px 10px;
      background: ${p => p.theme.baseColor3};
      color: ${p => p.theme.baseColor1};
      
    }

  :hover {
    transform: scale(1.03);
  }
  @media (max-width: 960px) {
    min-width: 50%;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
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
        <CategoryItem style={{ backgroundImage: `url(${grass})` }}>
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
    </Page>
  );
};

export default Home;
