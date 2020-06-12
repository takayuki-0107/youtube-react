import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { fetchPopularData } from '../api/index';

const Top = () => {
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res);
    });
  }, []);

  return <Layout>top page</Layout>;
};

export default Top;
