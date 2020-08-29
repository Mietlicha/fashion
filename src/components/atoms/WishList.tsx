import React from 'react';
import { ReactComponent as WishListIcon } from '../../assets/icons/wishlist-heart.svg';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

const StyledWishListIcon = styled(WishListIcon)`
  fill: ${({ theme }) => theme.contrast};
  width: 45px;
  margin: 0 1rem;
`;

const StyledP = styled.p`
  position: absolute;
  top: 0;
  right: 50%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.white};
  font-weight: 300;
  transform: translateX(50%);
`;

const StyledLink = styled(Link)`
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const WishList: React.FC = () => {
  return (
    <StyledLink href="/#">
      <StyledWishListIcon />
      <StyledP>78</StyledP>
    </StyledLink>
  );
};

export default WishList;
