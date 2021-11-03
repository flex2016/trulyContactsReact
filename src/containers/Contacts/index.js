import React, { useContext } from "react";
import { GlobalContext } from "../../context/Provider";

const ContactsContainer = () => {
  const { contactsDispatch, contactsState } = useContext(GlobalContext);
  console.log("🚀 ~ file: index.js ~ line 6 ~ ContactsContainer ~ contactsState", contactsState)
  return <div>Contacts Container</div>;
};

export default ContactsContainer;
