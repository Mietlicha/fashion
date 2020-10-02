import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

interface Props {
  url: string;
}

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  z-index: 0;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Video: React.FC<Props> = ({ url }) => {
  return (
    <PlayerWrapper>
      <StyledReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        controls={false}
        pip={true}
        muted={true}
      />
    </PlayerWrapper>
  );
};

export default Video;
