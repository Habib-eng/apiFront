import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function RatingSystm() {
  
  
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  return (
    <DashboardLayout>
    <DashboardNavbar />
    <MDBox pt={6} pb={3} >
      <Grid container spacing={6} >
        <Grid item xs={12}>
          <Card >
          <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Edit Rating
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              <center>
                <div style={{marginBottom:"4%", marginTop:"4%"}}>
                <Rating size="large"
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
           </div>
           </center>
           <Form>
<div style={{marginLeft:"10%", marginRight:"10%"}}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Comment</Form.Label>
      <Form.Control as="textarea" rows={5}  />
    </Form.Group>

  </Row>
 <center> <Button variant="primary" type="submit" style={{marginBottom:"4%"}}>
    Rate Me
  </Button></center>
  </div>
</Form>

            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
    <Footer />
  </DashboardLayout>
  );
}

export default RatingSystm;
