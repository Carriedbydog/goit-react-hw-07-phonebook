import React from 'react';
import PropTypes from 'prop-types';
import { StyledContactBtn, StyledItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/phonebook/operations';
import { selectError, selectLoading } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleContactDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong..</h1>}
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
