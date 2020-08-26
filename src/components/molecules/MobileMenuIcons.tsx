import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setMobileMenuOpen from '../../store/actions/setMobileMenuOpen';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DehazeIcon from '@material-ui/icons/Dehaze';
import WishList from '../atoms/WishList';
import Cart from '../atoms/Cart';
import styled from 'styled-components';

const StyledCloseIcon = styled(CloseIcon)`
  transform: scale(2.2);
`;

const StyledDehazeIcon = styled(DehazeIcon)`
  transform: scale(2.2);
`;

const MobileMenuIcons: React.FC = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(
    (state) => state.mobileMenuOpen.setMobileMenuOpen
  );
  return (
    <>
      <WishList />
      <Cart />
      <IconButton onClick={() => dispatch(setMobileMenuOpen(!openMenu))}>
        {openMenu ? <StyledCloseIcon /> : <StyledDehazeIcon />}
      </IconButton>
    </>
  );
};

export default MobileMenuIcons;
