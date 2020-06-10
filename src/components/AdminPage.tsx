import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminWrap = styled.div`
  height: 100vh;
  margin-bottom: 180px;
`;

const AdminNav = styled.nav`
  width: 100%;
  height: 100px;
  background: ${(p) => p.theme.subText};
`;

const AdminList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  li {
    margin-right: 30px;
  }
`;

const AdminPage = () => {
  return (
    <AdminWrap>
      <AdminNav>
        <AdminList>
          <li>
            <Link to='/admin/create-collection'>新規作成</Link>
          </li>

          <li>
            <Link to='/'>売上管理</Link>
          </li>
        </AdminList>
      </AdminNav>
    </AdminWrap>
  );
};

export default AdminPage;
