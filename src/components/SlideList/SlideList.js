import React, { useContext } from 'react';
import Style from './SlideList.module.scss';
import { Store } from '../../store/index';
import SlideListItem from '../SlideListItem/SlideListItem';

const SlideList = () => {
  const { globalState } = useContext(Store);

  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          return (
            <SlideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          );
        })
      ) : (
        <span>no data</span>
      )}
    </div>
  );
};

export default SlideList;
