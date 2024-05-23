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
//       { Header: "author", accessor: "author", width: "45%", align: "left" },
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

// Images
import staff1 from "assets/images/staff-1.jpg";
import staff2 from "assets/images/staff-2.jpg";
import staff3 from "assets/images/staff-3.jpg";
import staff4 from "assets/images/staff-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
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

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "staff", accessor: "author", width: "45%", align: "left" },
      { Header: "role", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "employed since", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={staff1} name="Ahmed Khalid" email="ahmed.khalid@islamicschool.com" />,
        function: <Job title="Principal" description="Administration" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            15/08/16
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={staff2} name="Fatima Noor" email="fatima.noor@islamicschool.com" />,
        function: <Job title="Teacher" description="Islamic Studies" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            01/11/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={staff3} name="Yusuf Ali" email="yusuf.ali@islamicschool.com" />,
        function: <Job title="Counselor" description="Student Guidance" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/03/17
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        author: <Author image={staff4} name="Layla Hussein" email="layla.hussein@islamicschool.com" />,
        function: <Job title="Teacher" description="Quran Studies" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            12/09/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}

