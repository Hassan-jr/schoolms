// // @mui material components
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// // Material Dashboard 2 React example components
// import TimelineItem from "examples/Timeline/TimelineItem";

// function OrdersOverview() {
//   return (
//     <Card sx={{ height: "100%" }}>
//       <MDBox pt={3} px={3}>
//         <MDTypography variant="h6" fontWeight="medium">
//           Recent Activities
//         </MDTypography>
//         <MDBox mt={0} mb={2}>
//           <MDTypography variant="button" color="text" fontWeight="regular">
//             <MDTypography display="inline" variant="body2" verticalAlign="middle">
//               <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
//             </MDTypography>
//             &nbsp;
//             <MDTypography variant="button" color="text" fontWeight="medium">
//               24%
//             </MDTypography>{" "}
//             in expenses this month
//           </MDTypography>
//         </MDBox>
//       </MDBox>
//       <MDBox p={2}>
//         <TimelineItem
//           color="success"
//           icon="notifications"
//           title="New Driver Added"
//           dateTime="22 Apr 7:20 PM"
//         />
//         <TimelineItem
//           color="error"
//           icon="inventory_2"
//           title="1 Driver License Overdue"
//           dateTime="21 Apr 11 PM"
//         />
//         <TimelineItem
//           color="info"
//           icon="local_shipping"
//           title="14 Loads not invoiced"
//           dateTime="21 Mar 9:34 PM"
//         />
//         <TimelineItem
//           color="warning"
//           icon="payment"
//           title="New Owner Operator added"
//           dateTime="20 Feb 2:20 AM"
//         />
//         <TimelineItem
//           color="primary"
//           icon="vpn_key"
//           title="Unit G05 Details Updated"
//           dateTime="18 Jan 4:54 AM"
//           lastItem
//         />
//       </MDBox>
//     </Card>
//   );
// }

// export default OrdersOverview;
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Recent Activities
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            increase in student attendance
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="school"
          title="New Student Enrolled"
          dateTime="22 Apr 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="event_busy"
          title="Parent-Teacher Meeting Overdue"
          dateTime="21 Apr 11 PM"
        />
        <TimelineItem
          color="info"
          icon="book"
          title="Quran Recitation Competition Held"
          dateTime="21 Mar 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="library_books"
          title="New Islamic Studies Curriculum Introduced"
          dateTime="20 Feb 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="emoji_events"
          title="Student Achieved High Marks in Exams"
          dateTime="18 Jan 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
