import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { IconWrap } from './HeaderLoginedNav';

const HeaderNav = () => {
  return (
    <>
      <Link data-tip='Login' to='/login'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 32 32'
          className='header-icon'
        >
          <title>user</title>
          <path d='M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z'></path>
        </svg>
      </Link>
      <ReactTooltip />
      <IconWrap data-tip='cart'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 32 32'
          className='header-icon'
        >
          <title>cart</title>
          <path d='M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
          <path d='M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
          <path d='M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z'></path>
        </svg>{' '}
        <span>12</span>
      </IconWrap>
      <ReactTooltip />
    </>
  );
};

export { HeaderNav };
