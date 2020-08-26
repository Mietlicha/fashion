import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/icons/circle.svg';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

const StyledCart = styled(CartIcon)`
  fill: ${({ theme }) => theme.contrast};
  width: 32px;
  margin: 0 1rem;
`;

const StyledP = styled.p`
  position: absolute;
  top: 5%;
  right: 50%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.white};
  font-weight: 300;
  transform: translateX(50%);
`;

const StyledLink = styled(Link)`
  position: relative;
`;

const Cart: React.FC = () => {
  return (
    <StyledLink href="/#">
      <StyledCart />
      <StyledP>78</StyledP>
    </StyledLink>
  );
};

export default Cart;
