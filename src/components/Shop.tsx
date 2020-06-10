import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Categories from './Categories';
import { Page } from './common';

type RouteParams = {
  category: string;
}

const Shop = () => {
  const params = useParams<RouteParams>().category
  return (
    <Page title={`${params}`} wide={true}>
      <Categories params={params} />
    </Page>
  );
};

export default Shop;
