import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { fetchPopularData } from '../api/index';
import { Store } from '../store/index';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData()
      .then((res) => {
        setGlobalState({
          type: 'SET_POPULAR',
          payload: { popular: res.data.items },
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <VideoGrid>
        {globalState.popular &&
          globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title}
              />
            );
          })}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
