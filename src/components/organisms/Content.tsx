import React from 'react';
import Video from '../atoms/Video';
import video from '../../assets/images/video.mp4';

const Content: React.FC = () => {
  return (
    <>
      <Video url={video} />
    </>
  );
};

export default Content;
