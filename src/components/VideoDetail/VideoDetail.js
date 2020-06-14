import React, { useEffect, useContext } from 'react';
import Linkify from 'react-linkify';

import Style from './VideoDetail.module.scss';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData } from '../../api/index';
import { Store } from '../../store/index';
import VideoPlay from '../VideoPlay/VideoPlay';

const VideoDetail = () => {
  //現在のurlやparamsを取得できる
  const location = useLocation();
  const { globalState, setGlobalState } = useContext(Store);
  const setSelectedVideo = async () => {
    //locationにはurlの？マーク以降がstringとして格納されている。URLSearchParamsに渡すことで取得しやすいようにオブジェクトに変更してくれる
    const searchParams = new URLSearchParams(location.search);
    // console.log(searchParams);
    //idはv=という形で格納されている
    const id = searchParams.get('v');
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift();
      console.log(item);
      setGlobalState({
        type: 'SET_SELECTED',
        payload: { selected: item },
      });
    });
  };

  //useEffect内部では直接async,awaitは使用できない
  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  );
};

export default VideoDetail;
