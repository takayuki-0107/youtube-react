import React, { useContext } from 'react';
import Linkify from 'react-linkify';

import Style from './VideoDetail.module.scss';
import { Store } from '../../store/index';
import VideoPlay from '../VideoPlay/VideoPlay';

const VideoDetail = () => {
  const { globalState } = useContext(Store);

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
