// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Admin/Dashboard/Dashboard.js";
import UserProfile from "views/Admin/UserProfile/UserProfile.js";
import NotificationsPage from "views/Admin/Notifications/Notifications.js";
import Questions from "views/Admin/Questions/Questions";
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
    path: "/questions",
    name: "Questionários",
    icon: BubbleChart,
    component: Questions,
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
