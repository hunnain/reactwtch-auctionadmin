/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard        from "views/Dashboard";
import ViewAllProducts  from "views/ViewAllProducts";
import ViewAllOrders    from "views/ViewAllOrders";
import ViewAllUsers     from "views/ViewAllUsers";
import ProductManage     from "views/ProductManage";

// import UserProfile from "views/UserProfile.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import Icons from "views/Icons.js";
// import Maps from "views/Maps.js";
// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/products/update/:id",
    name: "Products",
    icon: "nc-icon nc-watch-time",
    component: ProductManage,
    layout: "/admin",
    type: "innerPage",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-watch-time",
    component: ViewAllProducts,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-app",
    component: ViewAllOrders,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: ViewAllUsers,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
