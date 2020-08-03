import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import MaterialSelect from '../atoms/MaterialSelect';

const StyledBox = styled(Box)`
  background: ${({ theme }) => theme.black};
`;

const TopBar: React.FC = () => {
  return (
    <StyledBox py={2} px={5} display="flex" justifyContent="flex-end">
      <MaterialSelect />
    </StyledBox>
  );
};

export default TopBar;
