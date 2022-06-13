import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";


import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
    

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
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
                Edit Profile
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
                <div style={{marginLeft:"4%", marginTop:"1%",borderRadius:"10px", width:"92%"}}>
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>First Name</Form.Label>
    <Form.Control placeholder="John" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Last Name</Form.Label>
    <Form.Control placeholder="Doe" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Enter Your Age" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Role</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Employee</option>
        <option>Client</option>
      </Form.Select>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit" style={{marginBottom:"4%"}}>
    Submit
  </Button>
</Form></div>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
    <Footer />
  </DashboardLayout>
     
  );
};

export default UserProfile;
