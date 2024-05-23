// import Icon from "@mui/material/Icon";
// // @mui material components
// import Tooltip from "@mui/material/Tooltip";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// // import MDProgress from "components/MDProgress";

// // Images
// // import logoXD from "assets/images/small-logos/logo-xd.svg";
// // import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// // import logoSlack from "assets/images/small-logos/logo-slack.svg";
// // import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// // import logoJira from "assets/images/small-logos/logo-jira.svg";
// // import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team1 from "assets/images/logo-ct-dark.png";
// import company1 from "assets/images/company1.png";
// import company2 from "assets/images/company2.png";
// import company3 from "assets/images/company3.jpeg";
// import company4 from "assets/images/company4.png";
// // import team2 from "assets/images/team-2.jpg";
// // import team3 from "assets/images/team-3.jpg";
// // import team4 from "assets/images/team-4.jpg";

// export default function data() {
//   const avatars = (members) =>
//     members.map(([image, name]) => (
//       <Tooltip key={name} title={name} placeholder="bottom">
//         <MDAvatar
//           src={image}
//           alt="name"
//           size="xs"
//           sx={{
//             border: ({ borders: { borderWidth }, palette: { white } }) =>
//               `${borderWidth[2]} solid ${white.main}`,
//             cursor: "pointer",
//             position: "relative",

//             "&:not(:first-of-type)": {
//               ml: -1.25,
//             },

//             "&:hover, &:focus": {
//               zIndex: "10",
//             },
//           }}
//         />
//       </Tooltip>
//     ));

//   // const Company = ({ image, name }) => (
//   //   <MDBox display="flex" alignItems="center" lineHeight={1}>
//   //     <MDAvatar src={image} name={name} size="sm" />
//   //     <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
//   //       {name}
//   //     </MDTypography>
//   //   </MDBox>
//   // );

//   const loaddata = [
//     {
//       loadID: "980654",
//       pickUpDate: "25 May - ",
//       dropOffDate: "27 May",
//       price: "$10,500",
//       from: "Houston, TX",
//       to: "Tucson, AZ",
//       broker: [team1, "Transport Solutions Inc"],
//     },
//     {
//       loadID: "276589",
//       pickUpDate: "2 Jun - ",
//       dropOffDate: "4 Jun",
//       price: "$8,250",
//       from: "Atlanta, GA",
//       to: "Columbus, OH",
//       broker: [company1, "Velocity Express"],
//     },
//     {
//       loadID: "732465",
//       pickUpDate: "5 Jun - ",
//       dropOffDate: "8 Jun",
//       price: "$12,750",
//       from: "Los Angeles, CA",
//       to: "New York, NY",
//       broker: [company2, "Prime Logistics LLC"],
//     },
//     {
//       loadID: "328579",
//       pickUpDate: "15 Jun - ",
//       dropOffDate: "18 Jun",
//       price: "$9,000",
//       from: "Miami, FL",
//       to: "Houston, TX",
//       broker: [company3, "Luck Transportation LLC"],
//     },
//     {
//       loadID: "872513",
//       pickUpDate: "22 Jun - ",
//       dropOffDate: "25 Jun",
//       price: "$11,500",
//       from: "Portland, OR",
//       to: "Dallas, TX",
//       broker: [company4, "Precision Logistics Inc"],
//     },
//     {
//       loadID: "421365",
//       pickUpDate: "30 Jun - ",
//       dropOffDate: "2 Jul",
//       price: "$7,800",
//       from: "Chicago, IL",
//       to: "St. Louis, MO",
//       broker: [company2, "Velocity Express"],
//     },
//   ];

//   return {
//     // columns: [
//     //   { Header: "companies", accessor: "companies", width: "45%", align: "left" },
//     //   { Header: "members", accessor: "members", width: "10%", align: "left" },
//     //   { Header: "budget", accessor: "budget", align: "center" },
//     //   { Header: "completion", accessor: "completion", align: "center" },
//     // ]

//     columns: [
//       { Header: "Load ID", accessor: "loadid", align: "left" },
//       { Header: "Date", accessor: "date", width: "10%", align: "center" },
//       { Header: "Load Fee", accessor: "loadfee", width: "40%", align: "center" },
//       { Header: "Location", accessor: "location", align: "center" },
//       { Header: "Broker", accessor: "broker", align: "center" },
//     ],

//     rows: loaddata.map((load) => ({
//       loadid: (
//         <MDTypography
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           variant="caption"
//           color="text"
//           fontWeight="medium"
//         >
//           <Icon fontSize="midium" ml={0}>
//             local_shipping
//           </Icon>
//           {/* &nbsp;&nbsp; */}
//           <MDTypography variant="caption" color="text" fontWeight="medium" ml={1}>
//             {load.loadID}
//           </MDTypography>
//         </MDTypography>
//       ),
//       date: (
//         <MDBox display="flex" justifyContent="space-evenly" py={1}>
//           <MDTypography variant="caption" color="text" fontWeight="medium" mx={1}>
//             {load.pickUpDate}
//           </MDTypography>
//           <MDTypography variant="caption" color="text" fontWeight="medium">
//             {load.dropOffDate}
//           </MDTypography>
//         </MDBox>
//       ),
//       loadfee: (
//         <MDTypography variant="caption" color="text" fontWeight="medium">
//           {load.price}
//         </MDTypography>
//       ),
//       location: (
//         <MDBox width="8rem" textAlign="center" display="flex">
//           <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
//             {load.from}
//           </MDTypography>
//           <MDTypography variant="caption" color="text" fontWeight="medium" mx={2}>
//             to
//           </MDTypography>
//           <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
//             {load.to}
//           </MDTypography>
//         </MDBox>
//       ),
//       broker: (
//         <MDTypography variant="caption" color="text" fontWeight="medium">
//           {avatars([[...load.broker]])}
//         </MDTypography>
//       ),
//     })),
//   };
// }

// import Icon from "@mui/material/Icon";
// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
// import student1 from "assets/images/student1.png";
// import student2 from "assets/images/student2.png";
// import student3 from "assets/images/student3.png";
// import student4 from "assets/images/student4.png";

export default function data() {
  const loaddata = [
    {
      studentID: "980654",
      studentName: "Mohamed",
      paymentDate: "27 May",
      amountPayed: "$1,500",
      balance: "$200",
      // avatar: student1,
    },
    {
      studentID: "276589",
      studentName: "Aisha",
      paymentDate: "2 Jun",
      amountPayed: "$1,250",
      balance: "$150",
      // avatar: student2,
    },
    {
      studentID: "732465",
      studentName: "Ahmed",
      paymentDate: "5 Jun",
      amountPayed: "$1,750",
      balance: "$300",
      // avatar: student3,
    },
    {
      studentID: "328579",
      studentName: "Fatima",
      paymentDate: "15 Jun",
      amountPayed: "$900",
      balance: "$100",
      // avatar: student4,
    },
    {
      studentID: "872513",
      studentName: "Hassan",
      paymentDate: "22 Jun",
      amountPayed: "$1,500",
      balance: "$200",
      // avatar: student1,
    },
    {
      studentID: "421365",
      studentName: "Zainab",
      paymentDate: "30 Jun",
      amountPayed: "$1,800",
      balance: "$250",
      // avatar: student2,
    },
  ];

  const columns = [
    { Header: "Student ID", accessor: "studentID", align: "left" },
    { Header: "Student Name", accessor: "studentName", align: "left" },
    { Header: "Payment Date", accessor: "paymentDate", align: "center" },
    { Header: "Amount Payed", accessor: "amountPayed", align: "center" },
    { Header: "Balance", accessor: "balance", align: "center" },
  ];

  const rows = loaddata.map((student) => ({
    studentID: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {student.studentID}
      </MDTypography>
    ),
    studentName: (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <Tooltip key={student.studentName} title={student.studentName} placeholder="bottom">
          <MDAvatar
            src={student.avatar}
            alt={student.studentName}
            size="xs"
            sx={{
              border: ({ borders: { borderWidth }, palette: { white } }) =>
                `${borderWidth[2]} solid ${white.main}`,
              cursor: "pointer",
              position: "relative",
              "&:not(:first-of-type)": {
                ml: -1.25,
              },
              "&:hover, &:focus": {
                zIndex: "10",
              },
            }}
          />
        </Tooltip>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={1}>
          {student.studentName}
        </MDTypography>
      </MDBox>
    ),
    paymentDate: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {student.paymentDate}
      </MDTypography>
    ),
    amountPayed: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {student.amountPayed}
      </MDTypography>
    ),
    balance: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {student.balance}
      </MDTypography>
    ),
  }));

  return {
    columns,
    rows,
  };
}
