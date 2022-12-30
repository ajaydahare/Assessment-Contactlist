import { v4 as uuidv4 } from 'uuid';
const reducer = (contacts = [], action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return contacts;
    case "ADD_CONTACT":
      return [{id:uuidv4(),...action.payload}, ...contacts];
    case "EDIT_CONTACT":
      return contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case "DELETE_CONTACT":
      return contacts.filter((contact) => contact.id !== action.payload);
    default:
      return contacts
  }
};

export default reducer;
