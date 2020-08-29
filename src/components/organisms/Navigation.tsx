import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import MobileMenu from '../atoms/MobileMenu';
import { Divider, Box, useMediaQuery } from '@material-ui/core';
import MobileMenuIcons from '../molecules/MobileMenuIcons';
import DesktopMenu from '../molecules/DesktopMenu';
import { theme } from '../../utils/theme';

const LogoBox = styled(Box)`
  transform: scale(1.3);
`;

const BorderBox = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const Navigation: React.FC = () => {
  const matches = useMediaQuery(theme.xlargeUp);
  return (
    <BorderBox
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
        height="70px"
      >
        <LogoBox mx={5}>
          <Logo />
        </LogoBox>

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
    </BorderBox>
  );
};

export default Navigation;
