import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledLabel } from 'components/ContactForm/Form.styled';
import { StyledFilter } from './Filter.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = ({ inputFilterData }) => {
  const filter = useSelector(selectFilter);

  return (
    <StyledFilter>
      <StyledLabel>
        Find contacts by name:
        <StyledInput
          type="text"
          value={filter}
          placeholder="Enter contact name"
          onChange={inputFilterData}
        />
      </StyledLabel>
    </StyledFilter>
  );
};

Filter.propTypes = {
  inputFilterData: PropTypes.func,
};
