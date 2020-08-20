import React from 'react';
import styled from 'styled-components';
// import FlexWrapper from './FlexWrapper';
// import P from './P';
import { Box } from '@material-ui/core';

// const PositionWrapper = styled(FlexWrapper)`
//   position: relative;
//   width: 30px;
//   margin-left: ${({ theme }) => theme.spaces.small};
// `;

const PositionedP = styled.p`
  position: absolute;
  top: 10%;
  right: 50%;
  transform: translate(50%, 10%);
  padding: 0;
  line-height: 0;
  color: ${({ theme }) => theme.white};
  font-weight: 300;
  font-size: 1.6rem;
`;

interface Props {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  text?: string;
}

const TextIcon: React.FC<Props> = ({ icon, text }) => {
  const Icon = icon;

  const style = {
    height: '35px',
  };

  return (
    <Box position="relative" width={30} ml={1}>
      <Icon style={style} />
      <PositionedP>{text}</PositionedP>
    </Box>
  );
};

export default TextIcon;
