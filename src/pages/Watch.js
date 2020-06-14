import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Store } from '../store/index';
import Layout from '../components/Layout/Layout';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import SlideList from '../components/SideList/SideList';
import { fetchSelectedData, fetchRelatedData } from '../api/index';

const Watch = () => {
  const { globalState, setGlobalState } = useContext(Store);
  //現在のurlやparamsを取得できる
  const location = useLocation();

  const setVideos = async () => {
    //locationにはurlの？マーク以降がstringとして格納されている。URLSearchParamsに渡すことで取得しやすいようにオブジェクトに変更してくれる
    const serchParamas = new URLSearchParams(location.search);
    //idはv=という形で格納されている
    const id = serchParamas.get('v');
    if (id) {
      //分割代入
      const [selected, related] = await Promise.all([
        fetchRelatedData(id),
        fetchSelectedData(id),
      ]);
      setGlobalState({
        type: 'SET_SELCTED',
        payload: { selected: selected.data.items.shift() },
      });
      setGlobalState({
        type: 'SET_RELATED',
        payload: { related: related.data.items.shift() },
      });
    }
  };

  //useEffect内部では直接async,awaitは使用できない
  useEffect(() => {
    setVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  return (
    <Layout>
      <VideoDetail />
      <SlideList />
    </Layout>
  );
};

export default Watch;
