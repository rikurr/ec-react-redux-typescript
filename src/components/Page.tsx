import React, { useEffect, FC, ReactNode } from 'react';
import { Layout } from './common';

type PageProps = {
  title: string;
  wide: boolean
};

const Page: FC<PageProps> = ({ title, children, wide }) => {
  useEffect(() => {
    document.title = `${title} | InFaste`;
    window.scrollTo(0, 0);
    console.log('hello');
  }, [title]);
  return <Layout wide={wide}>{children}</Layout>;
};

export { Page };
