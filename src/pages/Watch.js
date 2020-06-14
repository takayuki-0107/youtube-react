import React from 'react';
import Layout from '../components/Layout/Layout';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import SlideList from '../components/SlideList/SlideList';

const Watch = () => {
  return (
    <Layout>
      <VideoDetail />
      <SlideList />
    </Layout>
  );
};

export default Watch;
