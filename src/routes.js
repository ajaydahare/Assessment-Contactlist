import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import Home from "./pages/Home";

export const routes = [
  {
    name: "Contacts",
    path: "/",
    component: <Home />,
  },
  {
    name: "Add Contact",
    path: "/add-contact",
    component: <AddContact />,
  },
  {
    name: "Edit Contact",
    path: "/edit-contact/:id",
    component: <EditContact />,
  },
];
