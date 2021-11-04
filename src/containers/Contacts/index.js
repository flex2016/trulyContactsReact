import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";
import { useHistory } from "react-router-dom";
import ContactsListUI from "../../layout/Contacts/List";

const ContactsContainer = () => {
  const { contactsDispatch, contactsState } = useContext(GlobalContext);

  const history = useHistory();

  const {
    contacts: { data },
  } = contactsState;

  useEffect(() => {
    if (data.length === 0) {
      getContacts(history)(contactsDispatch);
    }
  }, []);

  return <ContactsListUI state={contactsState} />;
};

export default ContactsContainer;
