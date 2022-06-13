import Tables from "layouts/tables";

import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

import AddTicket from "layouts/AddTicket";
import UserProfile from "layouts/userprofile";
import RatingSystm from "layouts/rating";

const routes = [
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "UserProfile",
    key: "UserProfile",
    icon: <Icon fontSize="small">UserProfile</Icon>,
    route: "/UserProfile",
    component: <UserProfile />,
  },
  {
    type: "collapse",
    name: "AddTicket",
    key: "AddTicket",
    icon: <Icon fontSize="small">Add_Ticket</Icon>,
    route: "/AddTicket",
    component: <AddTicket />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
 
  {
    type: "collapse",
    name: "Rating",
    key: "Rating",
    icon: <Icon fontSize="small">Rating</Icon>,
    route: "/Rating",
    component: <RatingSystm />,
  },

 

];

export default routes;
