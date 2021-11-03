import RegisterContainer from "../containers/Register";
import LoginContainer from "../containers/Login";
import CreateContactContainer from "../containers/CreateContact";
import ContactsContainer from "../containers/Contacts";

const routes = [
  {
    path: "/auth/register",
    component: RegisterContainer,
    title: "Register",
    needsAuth: false,
  },

  {
    path: "/auth/login",
    component: LoginContainer,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/contacts/create",
    component: CreateContactContainer,
    title: "Create Contact",
    needsAuth: true,
  },
  {
    path: "/",
    component: ContactsContainer,
    title: "Contacts",
    needsAuth: true,
  },
];

export default routes;
