// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import FastForward from "@material-ui/icons/FastForward";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Admin/Dashboard/Dashboard.js";
import UserProfile from "views/Admin/UserProfile/UserProfile.js";
import NotificationsPage from "views/Admin/Notifications/Notifications.js";
import Filter from "views/Admin/Filter/Filter";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard adm.",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil de usuário",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/filter",
    name: "Peneira",
    icon: FastForward,
    component: Filter,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notificações",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
