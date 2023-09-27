import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { StyledSubTitle, StyledTitle, StyledWrapper } from 'styles/App.styled';
import { Form } from './ContactForm/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'redux/phonebook/slice';
import { selectContacts, selectFilter } from 'redux/phonebook/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleAddContact = (name, number) => {
    const item = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (item) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(contact));
  };

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StyledWrapper>
        <StyledTitle>PhoneBook</StyledTitle>
        <Form handleAddContact={handleAddContact} />
        <StyledSubTitle>Contacts</StyledSubTitle>
        <Filter inputFilterData={handleChangeFilter} filterValue={filter} />
        <ContactList
          contacts={filterContacts()}
          onDelete={handleContactDelete}
        />
      </StyledWrapper>
    </div>
  );
};
