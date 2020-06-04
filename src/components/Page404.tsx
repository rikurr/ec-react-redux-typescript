import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Page } from './common';

const Page404 = () => {
  return (
    <Page title='Not Found' wide={false}>
      <h2>お探しのページは存在しません。</h2>
      <Link to='/'>Topに戻る</Link>
    </Page>
  );
};

export default Page404;
