// // @mui material components
// import Icon from "@mui/material/Icon";

// import MDTypography from "components/MDTypography";

// export default function data() {
//   const rowData = [
//     {
//       loadId: "10483722",
//       loadMile: "502.00",
//       loadFee: "8,764.00",
//       detFee: "1,206.00",
//       tonoFee: "4,785.80",
//       layoverFee: "0.00",
//       pickup: "Columbus, OH",
//       dropoff: "Memphis, TN",
//       pickupDate: "May 3, 2023",
//       delivaryDate: "May 5, 2023",
//       billingDate: "May 7, 2023",
//       factored: "No",
//       brockerName: "Roadway Logistics",
//       unit: "T09",
//     },
//     {
//       loadId: "92475730",
//       loadMile: "280.00",
//       loadFee: "6,322.00",
//       detFee: "637.50",
//       tonoFee: "3,178.80",
//       layoverFee: "0.00",
//       pickup: "Indianapolis, IN",
//       dropoff: "Detroit, MI",
//       pickupDate: "May 4, 2023",
//       delivaryDate: "May 5, 2023",
//       billingDate: "May 7, 2023",
//       factored: "No",
//       brockerName: "Transport Connection",
//       unit: "G07",
//     },
//     {
//       loadId: "61734029",
//       loadMile: "746.00",
//       loadFee: "10,569.00",
//       detFee: "1,373.50",
//       tonoFee: "5,250.48",
//       layoverFee: "0.00",
//       pickup: "Houston, TX",
//       dropoff: "Tampa, FL",
//       pickupDate: "May 3, 2023",
//       delivaryDate: "May 6, 2023",
//       billingDate: "May 7, 2023",
//       factored: "Yes",
//       brockerName: "Pan American Logistics",
//       unit: "D01",
//     },
//     {
//       loadId: "12856754",
//       loadMile: "410.00",
//       loadFee: "7,220.00",
//       detFee: "901.50",
//       tonoFee: "3,610.00",
//       layoverFee: "0.00",
//       pickup: "Portland, OR",
//       dropoff: "Reno, NV",
//       pickupDate: "May 2, 2023",
//       delivaryDate: "May 3, 2023",
//       billingDate: "May 7, 2023",
//       factored: "No",
//       brockerName: "ProTrans Logistics",
//       unit: "F06",
//     },
//     {
//       loadId: "38395990",
//       loadMile: "596.00",
//       loadFee: "10,044.00",
//       detFee: "1,194.00",
//       tonoFee: "4,845.52",
//       layoverFee: "156.00",
//       pickup: "Newark, NJ",
//       dropoff: "Chicago, IL",
//       pickupDate: "May 2, 2023",
//       delivaryDate: "May 5, 2023",
//       billingDate: "May 7, 2023",
//       factored: "Yes",
//       brockerName: "Swift Transportation",
//       unit: "T03",
//     },
//     {
//       loadId: "50321691",
//       loadMile: "932.00",
//       loadFee: "15,309.00",
//       detFee: "1,942.00",
//       tonoFee: "7,814.98",
//       layoverFee: "468.48",
//       pickup: "Phoenix, AZ",
//       dropoff: "Seattle, WA",
//       pickupDate: "May 2, 2023",
//       delivaryDate: "May 6, 2023",
//       billingDate: "May 7, 2023",
//       factored: "Yes",
//       brockerName: "Western Express",
//       unit: "K04",
//     },
//     {
//       loadId: "74630519",
//       loadMile: "320.00",
//       loadFee: "6,376.00",
//       detFee: "704.80",
//       tonoFee: "3,000.00",
//       layoverFee: "0.00",
//       pickup: "Miami, FL",
//       dropoff: "Atlanta, GA",
//       pickupDate: "May 4, 2023",
//       delivaryDate: "May 5, 2023",
//       billingDate: "May 7, 2023",
//       factored: "No",
//       brockerName: "Falcon Transport",
//       unit: "B03",
//     },
//     {
//       loadId: "32970874",
//       loadMile: "854.00",
//       loadFee: "13,495.00",
//       detFee: "1,615.50",
//       tonoFee: "6,834.48",
//       layoverFee: "0.00",
//       pickup: "Dallas, TX",
//       dropoff: "Denver, CO",
//       pickupDate: "May 3, 2023",
//       delivaryDate: "May 6, 2023",
//       billingDate: "May 7, 2023",
//       factored: "No",
//       brockerName: "Reddaway",
//       unit: "P02",
//     },
//     {
//       loadId: "59622287",
//       loadMile: "421.00",
//       loadFee: "8,442.00",
//       detFee: "1,090.00",
//       tonoFee: "4,417.78",
//       layoverFee: "0.00",
//       pickup: "San Francisco, CA",
//       dropoff: "Los Angeles, CA",
//       pickupDate: "May 2, 2023",
//       delivaryDate: "May 3, 2023",
//       billingDate: "May 7, 2023",
//       factored: "No",
//       brockerName: "Old Dominion Freight Line",
//       unit: "R05",
//     },
//     {
//       loadId: "11783579",
//       loadMile: "683.00",
//       loadFee: "11,756.00",
//       detFee: "1,493.50",
//       tonoFee: "5,971.32",
//       layoverFee: "0.00",
//       pickup: "Chicago, IL",
//       dropoff: "Charlotte, NC",
//       pickupDate: "May 2, 2023",
//       delivaryDate: "May 5, 2023",
//       billingDate: "May 7, 2023",
//       factored: "Yes",
//       brockerName: "Estes Express Lines",
//       unit: "L02",
//     },
//   ];

//   return {
//     columns: [
//       { Header: "Load Icon", accessor: "project", align: "left" },
//       { Header: "Load ID", accessor: "loadId", align: "left" },
//       { Header: "Load Mile", accessor: "loadMile", align: "left" },
//       { Header: "Load Fee", accessor: "loadFee", align: "left" },
//       { Header: "Detension Fee", accessor: "detFee", align: "left" },
//       { Header: "Tono Fee", accessor: "tonoFee", align: "left" },
//       { Header: "Layover Fee", accessor: "layoverFee", align: "left" },
//       { Header: "Pickup Location", accessor: "pickup", align: "left" },
//       { Header: "Dropoff Location", accessor: "dropoff", align: "left" },
//       { Header: "Pickup Date", accessor: "pickupDate", align: "left" },
//       { Header: "Delivary Date", accessor: "delivaryDate", align: "left" },
//       { Header: "Billing Date", accessor: "billing", align: "left" },
//       { Header: "Is Factored?", accessor: "factored", align: "left" },
//       { Header: "Brocker Name", accessor: "brockerName", align: "left" },
//       { Header: "Unit No", accessor: "unitNo", align: "left" },
//       { Header: "More", accessor: "more", align: "left" },
//     ],

//     rows: rowData.map((row) => ({
//       project: (
//         <Icon fontSize="large" color="info">
//           local_shipping
//         </Icon>
//       ),
//       loadId: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           {row.loadId}
//         </MDTypography>
//       ),
//       loadMile: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           {row.loadMile}
//         </MDTypography>
//       ),
//       loadFee: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           ${row.loadFee}
//         </MDTypography>
//       ),
//       detFee: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           ${row.detFee}
//         </MDTypography>
//       ),
//       tonoFee: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           ${row.tonoFee}
//         </MDTypography>
//       ),
//       layoverFee: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           ${row.layoverFee}
//         </MDTypography>
//       ),
//       pickup: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           {row.pickup}
//         </MDTypography>
//       ),
//       dropoff: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           {row.dropoff}
//         </MDTypography>
//       ),
//       pickupDate: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           {row.pickupDate}
//         </MDTypography>
//       ),
//       delivaryDate: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           {row.delivaryDate}
//         </MDTypography>
//       ),
//       billing: (
//         <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//           {row.billingDate}
//         </MDTypography>
//       ),
//       factored: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {row.factored}
//         </MDTypography>
//       ),
//       brockerName: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {row.brockerName}
//         </MDTypography>
//       ),
//       unitNo: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {row.unit}
//         </MDTypography>
//       ),
//       more: (
//         <MDTypography component="a" href="#" color="text">
//           <Icon>more_vert</Icon>
//         </MDTypography>
//       ),
//     })),
//   };
// }

// @mui material components
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";

export default function data() {
  const rowData = [
    {
      staffId: "T001",
      name: "Ahmed Khalid",
      role: "Principal",
      subjects: "Administration",
      phone: "555-1234",
      email: "ahmed.khalid@islamicschool.com",
      hireDate: "15/08/16",
      status: "Active",
    },
    {
      staffId: "T002",
      name: "Fatima Noor",
      role: "Teacher",
      subjects: "Islamic Studies",
      phone: "555-5678",
      email: "fatima.noor@islamicschool.com",
      hireDate: "01/11/18",
      status: "Inactive",
    },
    {
      staffId: "T003",
      name: "Yusuf Ali",
      role: "Counselor",
      subjects: "Student Guidance",
      phone: "555-8765",
      email: "yusuf.ali@islamicschool.com",
      hireDate: "23/03/17",
      status: "Active",
    },
    {
      staffId: "T004",
      name: "Layla Hussein",
      role: "Teacher",
      subjects: "Quran Studies",
      phone: "555-4321",
      email: "layla.hussein@islamicschool.com",
      hireDate: "12/09/19",
      status: "Inactive",
    },
    {
      staffId: "T001",
      name: "Ahmed Khalid",
      role: "Principal",
      subjects: "Administration",
      phone: "555-1234",
      email: "ahmed.khalid@islamicschool.com",
      hireDate: "15/08/16",
      status: "Active",
    },
    {
      staffId: "T002",
      name: "Fatima Noor",
      role: "Teacher",
      subjects: "Islamic Studies",
      phone: "555-5678",
      email: "fatima.noor@islamicschool.com",
      hireDate: "01/11/18",
      status: "Inactive",
    },
    {
      staffId: "T003",
      name: "Yusuf Ali",
      role: "Counselor",
      subjects: "Student Guidance",
      phone: "555-8765",
      email: "yusuf.ali@islamicschool.com",
      hireDate: "23/03/17",
      status: "Active",
    },
    {
      staffId: "T004",
      name: "Layla Hussein",
      role: "Teacher",
      subjects: "Quran Studies",
      phone: "555-4321",
      email: "layla.hussein@islamicschool.com",
      hireDate: "12/09/19",
      status: "Inactive",
    },
    {
      staffId: "T001",
      name: "Ahmed Khalid",
      role: "Principal",
      subjects: "Administration",
      phone: "555-1234",
      email: "ahmed.khalid@islamicschool.com",
      hireDate: "15/08/16",
      status: "Active",
    },
    {
      staffId: "T002",
      name: "Fatima Noor",
      role: "Teacher",
      subjects: "Islamic Studies",
      phone: "555-5678",
      email: "fatima.noor@islamicschool.com",
      hireDate: "01/11/18",
      status: "Inactive",
    },
    {
      staffId: "T003",
      name: "Yusuf Ali",
      role: "Counselor",
      subjects: "Student Guidance",
      phone: "555-8765",
      email: "yusuf.ali@islamicschool.com",
      hireDate: "23/03/17",
      status: "Active",
    },
    {
      staffId: "T004",
      name: "Layla Hussein",
      role: "Teacher",
      subjects: "Quran Studies",
      phone: "555-4321",
      email: "layla.hussein@islamicschool.com",
      hireDate: "12/09/19",
      status: "Inactive",
    },
    {
      staffId: "T001",
      name: "Ahmed Khalid",
      role: "Principal",
      subjects: "Administration",
      phone: "555-1234",
      email: "ahmed.khalid@islamicschool.com",
      hireDate: "15/08/16",
      status: "Active",
    },
    {
      staffId: "T002",
      name: "Fatima Noor",
      role: "Teacher",
      subjects: "Islamic Studies",
      phone: "555-5678",
      email: "fatima.noor@islamicschool.com",
      hireDate: "01/11/18",
      status: "Inactive",
    },
    {
      staffId: "T003",
      name: "Yusuf Ali",
      role: "Counselor",
      subjects: "Student Guidance",
      phone: "555-8765",
      email: "yusuf.ali@islamicschool.com",
      hireDate: "23/03/17",
      status: "Active",
    },
    {
      staffId: "T004",
      name: "Layla Hussein",
      role: "Teacher",
      subjects: "Quran Studies",
      phone: "555-4321",
      email: "layla.hussein@islamicschool.com",
      hireDate: "12/09/19",
      status: "Inactive",
    },
  ];

  return {
    columns: [
      { Header: "Icon", accessor: "icon", align: "left" },
      { Header: "Staff ID", accessor: "staffId", align: "left" },
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "Role", accessor: "role", align: "left" },
      { Header: "Subjects", accessor: "subjects", align: "left" },
      { Header: "Phone", accessor: "phone", align: "left" },
      { Header: "Email", accessor: "email", align: "left" },
      { Header: "Hire Date", accessor: "hireDate", align: "left" },
      { Header: "Status", accessor: "status", align: "left" },
      { Header: "More", accessor: "more", align: "left" },
    ],

    rows: rowData.map((row) => ({
      icon: (
        <Icon fontSize="large" color="info">
          person
        </Icon>
      ),
      staffId: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {row.staffId}
        </MDTypography>
      ),
      name: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {row.name}
        </MDTypography>
      ),
      role: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {row.role}
        </MDTypography>
      ),
      subjects: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {row.subjects}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {row.phone}
        </MDTypography>
      ),
      email: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {row.email}
        </MDTypography>
      ),
      hireDate: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {row.hireDate}
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {row.status}
        </MDTypography>
      ),
      more: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    })),
  };
}
