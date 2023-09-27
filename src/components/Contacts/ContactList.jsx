import React from 'react';
import PropTypes from 'prop-types';
import { StyledContactBtn, StyledItem } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/phonebook/operations';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleContactDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <StyledItem key={contact.id}>
            {contact.name}: {contact.number}
            <StyledContactBtn
              onClick={() => handleContactDelete(contact.id)}
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
};
