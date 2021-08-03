import React from "react";
import ContactlistItem from './ContactListItem'
import PropTypes from 'prop-types';
    const ContactList = ({ contacts, onDelete }) => (
        <ul>  
        {contacts.map(({ name, number, id }) => ( 
         <ContactlistItem 
         key={id}
         id={id}
         name={name}
         number={number}
         onDelete={onDelete}
        />
         ))}
        </ul>
    );
    ContactList.propTypes = {
        contacts: PropTypes.array.isRequired,
        onDelete: PropTypes.func.isRequired,
      };
    
  export default ContactList;