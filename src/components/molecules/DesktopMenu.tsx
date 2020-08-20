import React, { useState } from 'react';
import styled from 'styled-components';
import { MENU } from '../../utils/data';
import { Box, ListItem, List, Link, Collapse } from '@material-ui/core';

// import CartAndWishListLinks from '../atoms/CartAndWishListLinks';

const StyledListItem = styled(ListItem)`
  justify-content: center;
  flex-wrap: nowrap;
  width: inherit;
  padding: 0 1vw;

  @media (min-width: 1240px) {
    padding: 0 2vw;
  }

  @media (min-width: 1620px) {
    padding: 0 3vw;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.josefin};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.black};
  }
`;

const SubmenuLink = styled(StyledLink)`
  padding: 1vw;

  &:hover {
    border-bottom: none;
    color: ${({ theme }) => theme.contrast};
  }

  @media (min-width: 1240px) {
    padding: 2vw;
  }

  @media (min-width: 1620px) {
    padding: 3vw;
  }
`;

const GreyStyledLink = styled(StyledLink)`
  color: ${({ theme }) => theme.secondary};
`;

const StyledList = styled(List)`
  width: 300px;
  background: ${({ theme }) => theme.white};
  position: relative;
  padding-bottom: 35px;
`;

const HoverBox = styled(Box)`
  position: absolute;
  top: 25px;
  background: ${({ theme }) => theme.white};

  &:before,
  &:after {
    content: '';
    height: 100%;
    width: 2000%;
    z-index: 999;
    position: absolute;
    background: ${({ theme }) => theme.white};
    top: 25px;
  }

  &:before {
    right: 100%;
  }
  &:after {
    left: 100%;
  }
`;

const CollapseContainer = styled(Collapse)`
  position: relative;
  top: 25px;
`;

const DesktopMenu = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleMouseEnter = (index) => () => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleMouseLeave = (index) => () => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      {MENU.map(({ menus = [], secondary, to, name }, index) => (
        <React.Fragment key={index}>
          <Box
            position="relative"
            m={index === 0 ? '0 auto' : 0}
            onMouseEnter={handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave(index)}
          >
            <StyledListItem disableGutters={true} button>
              {secondary ? (
                <GreyStyledLink href={to}>{name}</GreyStyledLink>
              ) : (
                <StyledLink href={to}>{name}</StyledLink>
              )}
            </StyledListItem>
            <HoverBox>
              <CollapseContainer
                in={index === openIndex}
                timeout="auto"
                unmountOnExit
              >
                {menus.length > 0 && (
                  <StyledList disablePadding>
                    {menus.map(({ name, to }, i) => (
                      <ListItem key={i} button disableGutters={true}>
                        <SubmenuLink href={to}>{name}</SubmenuLink>
                      </ListItem>
                    ))}
                  </StyledList>
                )}
              </CollapseContainer>
            </HoverBox>
          </Box>
        </React.Fragment>
      ))}

      {/* <CartAndWishListLinks /> */}
    </>
  );
};

export default DesktopMenu;
