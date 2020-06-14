import React from 'react';
import Style from './VideoPlay.module.scss';
import Youtube from 'react-youtube';

const VideoPlay = ({ id }) => {
  return (
    <div className={Style.wrap}>
      <Youtube className={Style.video} videoId={id} />
    </div>
  );
};

export default VideoPlay;
