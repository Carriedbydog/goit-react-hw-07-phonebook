import React from 'react';
import PropTypes from 'prop-types';
import { StyledContactBtn, StyledItem } from './ContactList.styled';

export const ContactList = ({ contacts = [], onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <StyledItem key={contact.id}>
            {contact.name}: {contact.number}
            <StyledContactBtn
              onClick={() => onDelete(contact.id)}
              type="button"
            >
              Delete
            </StyledContactBtn>
          </StyledItem>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
