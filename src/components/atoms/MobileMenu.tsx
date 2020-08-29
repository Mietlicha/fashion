import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MENU } from '../../utils/data';
import styled from 'styled-components';
import {
  Box,
  ListItem,
  List,
  Link,
  Collapse,
  Drawer,
  Divider,
} from '@material-ui/core';
import { ReactComponent as ArrowMobile } from '../../assets/icons/arrowMobile.svg';

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorDockedLeft {
    min-width: 310px;
    top: 94px;
  }
`;

const StyledList = styled(List)`
  padding-left: 50px;
`;
const StyledLink = styled(Link)`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.josefin};
  font-weight: 300;
  color: ${({ theme }) => theme.black};
  display: block;
  width: 100%;
  line-height: 1.6;

  &:hover {
    color: ${({ theme }) => theme.contrast};
  }
`;

const ArrowMobileUp = styled(ArrowMobile)`
  width: 30px;
  height: 30px;
`;

const ArrowMobileDown = styled(ArrowMobileUp)`
  transform: rotate(180deg);
`;

const MobileMenu: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleClick = (index) => () => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const openMenu = useSelector(
    (state) => state.mobileMenuOpen.setMobileMenuOpen
  );

  return (
    <StyledDrawer variant="persistent" anchor="left" open={openMenu}>
      {MENU.map(({ name, menus = [], to }, index) => (
        <React.Fragment key={index}>
          <Box py={0.5} px={5}>
            <ListItem
              disableGutters={true}
              button
              disableRipple={true}
              onClick={handleClick(index)}
            >
              <StyledLink href={to}>{name}</StyledLink>
              <Box ml="auto">
                {menus.length === 0 ? (
                  ''
                ) : openIndex === index ? (
                  <ArrowMobileDown />
                ) : (
                  <ArrowMobileUp />
                )}
              </Box>
            </ListItem>
          </Box>
          {openIndex !== index || menus.length === 0 ? <Divider /> : null}
          <Collapse
            in={openIndex === index && menus.length > 0}
            timeout="auto"
            unmountOnExit
          >
            <>
              <StyledList>
                {menus.map(({ name, to }, i) => (
                  <ListItem key={i} button disableRipple={true}>
                    <StyledLink href={to}>{name}</StyledLink>
                  </ListItem>
                ))}
              </StyledList>
              <Divider />
            </>
          </Collapse>
        </React.Fragment>
      ))}
    </StyledDrawer>
  );
};

export default MobileMenu;
