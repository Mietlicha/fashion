import React from 'react';
import logo from '../../assets/images/logo.svg';
import Img from '../atoms/Img';
import MobileMenu from '../atoms/MobileMenu';
import { Divider, Box, useMediaQuery } from '@material-ui/core';
import MobileMenuIcons from '../molecules/MobileMenuIcons';
import DesktopMenu from '../molecules/DesktopMenu';

const Navigation: React.FC = () => {
  const matches = useMediaQuery('(min-width:1000px)');

  return (
    <Box
      pr={1}
      pl={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="background.white"
      zIndex="100"
    >
      <Box
        display="flex"
        flexWrap="no-wrap"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        py={2}
        height="92px"
      >
        <Box mr={2}>
          <Img alt="logo" src={logo} />
        </Box>

        <Box
          display="flex"
          flex="1"
          justifyContent={matches ? 'flex-end' : 'space-around'}
          alignItems="center"
        >
          {matches ? <DesktopMenu /> : <MobileMenuIcons />}
        </Box>
      </Box>
      {matches ? null : <Divider />}
      {matches ? null : <MobileMenu />}
    </Box>
  );
};

export default Navigation;
