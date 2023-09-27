import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledInput, StyledLabel } from './Form.styled';

export const Form = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    handleAddContact(name, number);
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          pattern="^([a-zA-Z]|\s)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        Tel:
        <StyledInput
          type="tel"
          name="number"
          placeholder="Enter your number"
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </form>
  );
};

Form.propTypes = {
  handleAddContact: PropTypes.func,
};
