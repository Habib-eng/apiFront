import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import axios from "axios";
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

function AddTicket() {
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
              <MDTypography variant="h6" color="white" >
                Edit Ticket
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
                <div style={{marginLeft:"4%", marginTop:"1%",borderRadius:"10px", width:"92%"}}>
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nom et prenom</Form.Label>
      <Form.Control type="text" placeholder="Nom et prenom" />
      <Form.Label>Ticket Title</Form.Label>
      <Form.Control type="text" placeholder="Name Ticket" />
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Departement</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>R&D</option>
        <option>RH</option>
        <option>DAF</option>
        <option>Deployment</option>
        <option>Purchases</option>
      </Form.Select>
    </Form.Group>
  </Row>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={3}  />
    </Form.Group>

  </Row>
  <Row>
  <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Add</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  </Row>
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
}

export default AddTicket;
