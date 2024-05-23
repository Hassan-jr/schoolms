// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Drivers from "layouts/drivers";
import Parents from "layouts/parents";
import Teachers from "layouts/teachers";
import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  // Dashboard
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  // Owner Operator
  {
    type: "collapse",
    name: "Parents",
    key: "oop",
    icon: <Icon fontSize="small">people</Icon>,
    route: "Parents",
    component: <Parents />,
  },
  // Driver
  {
    type: "collapse",
    name: "Students",
    key: "driver",
    icon: <Icon fontSize="small">people</Icon>,
    route: "Students",
    component: <Drivers />,
  },
  // Units
  {
    type: "collapse",
    name: "Teachers",
    key: "units",
    icon: <Icon fontSize="small">people</Icon>,
    route: "teachers",
    component: <Teachers />,
  },
  // Loads
  {
    type: "collapse",
    name: "Staff",
    key: "loads",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/staff",
    component: <Tables />,
  },
  // Brocker/Factoring
  {
    type: "collapse",
    name: "Text Messages",
    key: "brocker",
    icon: <Icon fontSize="small">view_comfy</Icon>,
    route: "Text Messages",
    component: <Drivers />,
  },
  // Registration
  {
    type: "submenu",
    name: "Registration",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    state: false,
    index: 0,
    collapse: [
      {
        name: "Student Registration",
        key: "billToCompany",
        icon: <Icon fontSize="small">receipt</Icon>,
        route: "/registration/studentRegistration",
        component: <Billing />,
      },
      {
        name: "Tearcher Registration",
        key: "oopInvoice",
        icon: <Icon fontSize="small">receipt_long</Icon>,
        route: "/registration/teacherRegistration",
        component: <Billing />,
      },
      {
        name: "Other Staff Registration",
        key: "driverInvoice",
        icon: <Icon fontSize="small">receipt_long</Icon>,
        route: "/OtherStaffs",
        component: "",
      },
    ],
  },
  // FEES
  {
    type: "submenu",
    name: "Payments",
    key: "deducts",
    icon: <Icon fontSize="small">attach_money</Icon>,
    state: false,
    index: 1,
    collapse: [
      {
        name: "Fee Payments",
        key: "oopDeductions",
        icon: <Icon fontSize="small">monetization_on</Icon>,
        route: "",
        component: "",
      },
      {
        name: "Salary Payouts",
        key: "driverDeductions",
        icon: <Icon fontSize="small">monetization_on</Icon>,
        route: "/payouts/salary",
        component: <Billing />,
      },
      {
        name: "Expense Payouts",
        key: "dispatchDeductions",
        icon: <Icon fontSize="small">monetization_on</Icon>,
        route: "Payouts",
        component: <Billing />,
      },
      {
        name: "Other Expenses",
        key: "staffDeductions",
        icon: <Icon fontSize="small">monetization_on</Icon>,
        route: "Expenses",
        component: <Billing />,
      },
    ],
  },
  // sign in
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  // sign up
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  // Louout
  {
    type: "collapse",
    name: "Logout",
    key: "logout",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "#",
    component: "",
  },
];

export default routes;

// [
//   {
//     name: "pages",
//     columns: 3,
//     rowsPerColumn: 2,
//     collapse: [
//       {
//         name: "dashboards",
//         icon: <Icon>dashboard</Icon>,
//         collapse: [
//           {
//             name: "analytics",
//             route: "/dashboards/analytics",
//           },
//           {
//             name: "sales",
//             route: "/dashboards/sales",
//           },
//         ],
//       },
//       {
//         name: "users",
//         icon: <Icon>people</Icon>,
//         collapse: [
//           {
//             name: "reports",
//             route: "/pages/users/reports",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "authenticaton",
//     collapse: [
//       {
//         name: "sign in",
//         dropdown: true,
//         icon: <Icon>login</Icon>,
//         collapse: [
//           {
//             name: "basic",
//             route: "/authentication/sign-in/basic",
//           },
//           {
//             name: "cover",
//             route: "/authentication/sign-in/cover",
//           },
//           {
//             name: "illustration",
//             route: "/authentication/sign-in/illustration",
//           },
//         ],
//       },
//       {
//         name: "sign up",
//         dropdown: true,
//         icon: <Icon>assignment</Icon>,
//         collapse: [
//           {
//             name: "cover",
//             route: "/authentication/sign-up/cover",
//           },
//         ],
//       },
//       {
//         name: "reset password",
//         dropdown: true,
//         icon: <Icon>restart_alt</Icon>,
//         collapse: [
//           {
//             name: "cover",
//             route: "/authentication/reset-password/cover",
//           },
//         ],
//       },
//     ],
//   },
// ]
