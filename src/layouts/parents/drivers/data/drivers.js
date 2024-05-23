// /* eslint-disable react/prop-types */
// /* eslint-disable react/function-component-definition */
// /**
// =========================================================
// * Material Dashboard 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// export default function data() {
//   const Author = ({ image, name, email }) => (
//     <MDBox display="flex" alignItems="center" lineHeight={1}>
//       <MDAvatar src={image} name={name} size="sm" />
//       <MDBox ml={2} lineHeight={1}>
//         <MDTypography display="block" variant="button" fontWeight="medium">
//           {name}
//         </MDTypography>
//         <MDTypography variant="caption">{email}</MDTypography>
//       </MDBox>
//     </MDBox>
//   );

//   const Job = ({ title, description }) => (
//     <MDBox lineHeight={1} textAlign="left">
//       <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
//         {title}
//       </MDTypography>
//       <MDTypography variant="caption">{description}</MDTypography>
//     </MDBox>
//   );

//   return {
//     columns: [
//       { Header: "Driver", accessor: "author", align: "left" },
//       { Header: "function", accessor: "function", align: "left" },
//       { Header: "status", accessor: "status", align: "center" },
//       { Header: "employed", accessor: "employed", align: "center" },
//       { Header: "action", accessor: "action", align: "center" },
//     ],

//     rows: [
//       {
//         author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
//         function: <Job title="Manager" description="Organization" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             23/04/18
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
//         function: <Job title="Programator" description="Developer" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             11/01/19
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
//         function: <Job title="Executive" description="Projects" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             19/09/17
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
//         function: <Job title="Programator" description="Developer" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             24/12/08
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
//         function: <Job title="Manager" description="Executive" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             04/10/21
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
//         function: <Job title="Programator" description="Developer" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             14/09/20
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//     ],
//   };
// }
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );
}

Author.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

function Job({ grade, section }) {
  return (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {grade}
      </MDTypography>
      <MDTypography variant="caption">{section}</MDTypography>
    </MDBox>
  );
}

Job.propTypes = {
  grade: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};

export default function data() {
  const studentsData = [
    {
      name: "Ali Ahmad",
      email: "ali.ahmad@islamicschool.com",
      image: team2,
      grade: "Grade 10",
      section: "A",
      status: "Active",
      joined: "01/09/21",
    },
    {
      name: "Fatima Hussain",
      email: "fatima.hussain@islamicschool.com",
      image: team3,
      grade: "Grade 9",
      section: "B",
      status: "Active",
      joined: "15/08/20",
    },
    {
      name: "Yusuf Khan",
      email: "yusuf.khan@islamicschool.com",
      image: team4,
      grade: "Grade 8",
      section: "A",
      status: "Inactive",
      joined: "05/01/22",
    },
    {
      name: "Aisha Noor",
      email: "aisha.noor@islamicschool.com",
      image: team2,
      grade: "Grade 7",
      section: "C",
      status: "Active",
      joined: "23/03/21",
    },
    {
      name: "Omar Ali",
      email: "omar.ali@islamicschool.com",
      image: team3,
      grade: "Grade 6",
      section: "A",
      status: "Active",
      joined: "12/09/20",
    },
    {
      name: "Layla Hussein",
      email: "layla.hussein@islamicschool.com",
      image: team4,
      grade: "Grade 5",
      section: "B",
      status: "Inactive",
      joined: "30/11/19",
    },
    {
      name: "Hassan Ali",
      email: "hassan.ali@islamicschool.com",
      image: team2,
      grade: "Grade 10",
      section: "A",
      status: "Active",
      joined: "04/10/21",
    },
    {
      name: "Maryam Umar",
      email: "maryam.umar@islamicschool.com",
      image: team3,
      grade: "Grade 9",
      section: "C",
      status: "Active",
      joined: "14/09/20",
    },
    {
      name: "Bilal Rahman",
      email: "bilal.rahman@islamicschool.com",
      image: team4,
      grade: "Grade 8",
      section: "A",
      status: "Inactive",
      joined: "11/01/22",
    },
    {
      name: "Zara Yusuf",
      email: "zara.yusuf@islamicschool.com",
      image: team2,
      grade: "Grade 7",
      section: "B",
      status: "Active",
      joined: "02/05/21",
    },
    {
      name: "Ahmed Khalid",
      email: "ahmed.khalid@islamicschool.com",
      image: team3,
      grade: "Grade 6",
      section: "C",
      status: "Active",
      joined: "13/06/20",
    },
    {
      name: "Sara Fatima",
      email: "sara.fatima@islamicschool.com",
      image: team4,
      grade: "Grade 5",
      section: "A",
      status: "Inactive",
      joined: "09/02/19",
    },
    {
      name: "Ibrahim Noor",
      email: "ibrahim.noor@islamicschool.com",
      image: team2,
      grade: "Grade 10",
      section: "B",
      status: "Active",
      joined: "15/08/21",
    },
    {
      name: "Khadija Ahmad",
      email: "khadija.ahmad@islamicschool.com",
      image: team3,
      grade: "Grade 9",
      section: "A",
      status: "Active",
      joined: "18/09/20",
    },
    {
      name: "Sulaiman Yusuf",
      email: "sulaiman.yusuf@islamicschool.com",
      image: team4,
      grade: "Grade 8",
      section: "C",
      status: "Inactive",
      joined: "23/03/22",
    },
    {
      name: "Hafsa Bilal",
      email: "hafsa.bilal@islamicschool.com",
      image: team2,
      grade: "Grade 7",
      section: "A",
      status: "Active",
      joined: "29/10/21",
    },
    {
      name: "Yasmin Omar",
      email: "yasmin.omar@islamicschool.com",
      image: team3,
      grade: "Grade 6",
      section: "B",
      status: "Active",
      joined: "08/11/20",
    },
    {
      name: "Nadia Hassan",
      email: "nadia.hassan@islamicschool.com",
      image: team4,
      grade: "Grade 5",
      section: "C",
      status: "Inactive",
      joined: "01/03/19",
    },
    {
      name: "Ismail Rahman",
      email: "ismail.rahman@islamicschool.com",
      image: team2,
      grade: "Grade 10",
      section: "A",
      status: "Active",
      joined: "24/12/21",
    },
    {
      name: "Aminah Ali",
      email: "aminah.ali@islamicschool.com",
      image: team3,
      grade: "Grade 9",
      section: "B",
      status: "Active",
      joined: "19/01/20",
    },
  ];

  return {
    columns: [
      { Header: "Student", accessor: "author", width: "45%", align: "left" },
      { Header: "Grade & Section", accessor: "function", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Joined", accessor: "employed", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: studentsData.map((student) => ({
      author: <Author image={student.image} name={student.name} email={student.email} />,
      function: <Job grade={student.grade} section={student.section} />,
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={student.status === "Active" ? "online" : "offline"}
            color={student.status === "Active" ? "success" : "dark"}
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {student.joined}
        </MDTypography>
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    })),
  };
}
