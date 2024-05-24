/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const ISLAMIC_NOTIFICATIONS = [
    {
      title: "School Opening Dates",
      desc: "Dear respected parents and students, we are pleased to inform you that the school will resume its regular classes after the Eid holiday. Thank you for your cooperation.",
      dateTime: "11 mins ago",
      type: "info",
    },
    {
      title: "",
      desc: "_أعزائي أولياء الأمور، نعلمكم أن مدرستنا ستستأنف عملها بعد العيد. شكرًا لك",
      dateTime: "30 mins ago",
      type: "success",
    },
    {
      title: "",
      desc: "Waalidiinta qaaliga ah, waxaa la ogaysiinayaa in dugsigeennu dib u bilaaban doono ciidda ka dib.  Mahadsanid.",
      dateTime: "1 hour ago",
      type: "primary",
    },
    {
      title: "Exam Schedule",
      desc: "Assalamu Alaikum dear students, the final exam schedule for the current semester has been released. Please check the notice board or our school's online portal.",
      dateTime: "1 day ago",
    },
    {
      title: "Holiday Notification",
      desc: "Dear parents and guardians, we would like to inform you that the school will be closed for the upcoming public EID holiday. Please note that there will be no classes held on this day.",
      dateTime: "3 days ago",
      type: "success",
    },
    {
      title: "Parent-Teacher Meeting",
      desc: "As-salamu alaykum parents, we are organizing a Parent-Teacher Meeting to discuss your child's academic progress and any concerns you may have. We encourage all parents to attend and actively participate in their child's education. JazakAllah khair.",
      dateTime: "1 Week",
    },
    {
      title: "Islamic Seminar",
      desc: "Attention students, we are excited to announce an upcoming Islamic seminar titled 'Understanding the Quran: A Journey of Enlightenment'. Don't miss this enlightening opportunity!",
      dateTime: "2 Weeks ago",
      type: "success",
    },
    {
      title: "Community Service Event",
      desc: "Assalamu Alaikum students, we are organizing a community service event in collaboration with [organization name]. This event aims to provide assistance to the less fortunate members of our community. Volunteers are needed to participate in various activities such as distributing food, organizing recreational activities, and cleaning local areas. Join us on [date] and let's make a positive impact together.",
      dateTime: "3 Weeks ago",
    },
    {
      title: "Islamic Quiz Competition",
      desc: "Calling all students interested in testing their knowledge of Islam! We are hosting an Islamic Quiz Competition open to students from all grades. The competition will cover topics such as Quranic verses, Hadiths, Islamic history, and ethics. Prizes will be awarded to the top performers. Register now and showcase your Islamic knowledge!",
      dateTime: "1 Month ago",
      type: "primary",
    },
    {
      title: "Educational Trip",
      desc: "Attention students, we are pleased to announce an educational trip to [destination]. This trip is designed to enhance your learning experience outside the classroom by providing insights into [educational theme]. It will be an enriching opportunity to explore new cultures, historical landmarks, and natural wonders. Get ready for an unforgettable learning adventure!",
      dateTime: "1 Month ago",
    },
    {
      title: "Ramadan Activities",
      desc: "Assalamu Alaikum students and parents, as we approach the blessed month of Ramadan, we have planned various activities to engage our school community in acts of worship and charity. These activities include daily Quran recitation sessions, charity drives, iftar gatherings, and Taraweeh prayers. Let's make the most of this sacred month by seeking Allah's blessings and increasing our good deeds.",
      dateTime: "1 Month ago",
      type: "success",
    },
    {
      title: "Career Guidance Workshop",
      desc: "Attention graduating students, we are organizing a Career Guidance Workshop to assist you in planning your future career paths. Experienced professionals from various fields will provide insights into career options, higher education opportunities, and skill development strategies. The workshop will be held on [date] at [time] in the school library. Don't miss this valuable opportunity to prepare for your future!",
      dateTime: "2 Month ago",
    },
  ];

  const alertContent = (islam) => (
    <MDTypography variant="body2" color="white">
      {/* A simple {name} alert with{" "} */}
      <MDTypography
        component="a"
        display="block"
        href="#"
        variant="body2"
        fontWeight="medium"
        color="white"
      >
        {/* an example link */}
        {islam.title}
      </MDTypography>
      <MDTypography display="block" component="a" href="#" variant="body2" color="white">
        {/* an example link */}
        {islam.desc}
      </MDTypography>
      {islam.dateTime}
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="School Opening Dates"
      content="Dear parents, be informed that our school will resume after Eid. Thank you. "
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="School Opening Dates"
      content="Dear parents, be informed that our school will resume after Eid. Thank you."
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Messages</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                {ISLAMIC_NOTIFICATIONS.map((islam) => (
                  <MDAlert key={islam.title} color={islam.type ? islam.type : "info"} dismissible>
                    {alertContent(islam)}
                  </MDAlert>
                ))}
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Notifications</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </MDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </MDButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </MDButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </MDButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
