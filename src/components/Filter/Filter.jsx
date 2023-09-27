import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledLabel } from 'components/ContactForm/Form.styled';
import { StyledFilter } from './Filter.styled';

export const Filter = ({ filterValue, inputFilterData }) => {
  return (
    <StyledFilter>
      <StyledLabel>
        Find contacts by name
        <StyledInput
          type="text"
          value={filterValue}
          placeholder="Enter contact name"
          onChange={inputFilterData}
        />
      </StyledLabel>
    </StyledFilter>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  inputFilterData: PropTypes.func,
};
