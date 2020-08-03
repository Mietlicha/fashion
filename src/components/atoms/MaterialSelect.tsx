import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { THEME } from '../../utils/data';

const StyledFormControl = styled(FormControl)`
  && .MuiInputBase-root {
    width: 50px;
  }

  && .MuiInput-underline:before {
    border-bottom: 1px solid rgb(255 255 255);
  }

  && .MuiSelect-icon {
    color: rgb(255 255 255);
  }
`;
const StyledSelect = styled(Select)`
  && .MuiSelect-select.MuiSelect-select {
    padding: 0;
    color: ${({ theme }) => theme.white};
    font-size: 13px;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 5px 10px &&&&.MuiListItem-button {
    &:hover {
      color: ${({ theme }) => theme.contrast};
    }
  }
`;

const MaterialSelect: React.FC = () => {
  return (
    <StyledFormControl>
      <StyledSelect
        MenuProps={{ disableScrollLock: true }}
        defaultValue={'light'}
        inputProps={{
          name: 'name',
          id: 'uncontrolled-native',
        }}
      >
        {THEME.map(({ name, value }, i) => {
          return (
            <StyledMenuItem key={i} value={value}>
              {name}
            </StyledMenuItem>
          );
        })}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default MaterialSelect;
