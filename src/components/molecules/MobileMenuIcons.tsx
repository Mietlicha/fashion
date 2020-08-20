import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setMobileMenuOpen from '../../store/actions/setMobileMenuOpen';
import TextIcon from '../atoms/TextIcon';
import { ReactComponent as wishListIcon } from '../../assets/icons/wishlist-heart.svg';
import { ReactComponent as circleIcon } from '../../assets/icons/circle.svg';
import { IconButton, Link } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DehazeIcon from '@material-ui/icons/Dehaze';

const MobileMenuIcons: React.FC = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(
    (state) => state.mobileMenuOpen.setMobileMenuOpen
  );
  return (
    <>
      <Link href="/#">
        <TextIcon text="99" icon={wishListIcon} />
      </Link>
      <Link href="/#">
        <TextIcon text="99" icon={circleIcon} />
      </Link>
      <IconButton onClick={() => dispatch(setMobileMenuOpen(!openMenu))}>
        {openMenu ? <CloseIcon /> : <DehazeIcon />}
      </IconButton>
    </>
  );
};

export default MobileMenuIcons;
