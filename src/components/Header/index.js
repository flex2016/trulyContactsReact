import React, { useContext } from "react";
import { Menu, Image, Button, Icon, Input } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import { GlobalContext } from "../../context/Provider";
import logout from "../../context/actions/auth/logout";
import isAuthenticated from "../../utils/isAuthenticated";

const Header = () => {
  const history = useHistory();

  const { contactsDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };
  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
        TrulyContacts
      </Menu.Item>

      {isAuthenticated() && (
        <Menu.Item position="right">
          <Input style={{ width: 350 }} placeholder="Search Contacts" />
        </Menu.Item>
      )}
      {isAuthenticated() && (
        <Menu.Item position="right">
          <Button as={Link} to="/contacts/create" primary basic icon>
            <Icon name="add"></Icon>
            Create Contact
          </Button>
        </Menu.Item>
      )}
      {isAuthenticated() && (
        <Menu.Item>
          {" "}
          <Button onClick={handleUserLogout} color="red" basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
