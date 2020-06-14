import React, { useEffect, useContext } from 'react';
import Style from './SlideList.module.scss';
import { fetchRelatedData } from '../../api/index';
import { Store } from '../../store/index';
import SlideListItem from '../SlideListItem/SlideListItem';

const SlideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const setRelatedVideo = async (id) => {
    await fetchRelatedData(id).then((res) => {
      console.log(res);
      setGlobalState({
        type: 'SET_RELATED',
        payload: { related: res.data.items },
      });
    });
  };
  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.selected]);
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
