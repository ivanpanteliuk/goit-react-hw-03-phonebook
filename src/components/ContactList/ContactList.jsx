import PropTypes from 'prop-types';
import { List, ListItem, Button } from './ContactList.styled';

const ContactList = ({ contactsArr, handleDeleteContact }) => (
  <List>
    {contactsArr.map(({ id, name, number }) => (
      <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </Button>
      </ListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
