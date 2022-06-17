import React, { useState } from 'react';
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

async function addReclamation(data) {
  return fetch('http://127.0.0.1:8000/api/reclamations', {
    method: 'POST',
    headers: {
      'withCredentials' : 'true',
      'Access-Control-Allow-Origin':'http://localhost:3000',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(data => {
      data.json();
      console.log(data);
    })
 }

function AddTicket() {

  const [nometprenom, setNometprenom] = useState();
  const [title, setTitle] = useState();
  const [departement, setDepartement] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addReclamation({
      nometprenom : nometprenom,
      titre : title,
      departement : departement,
      description : description
    });
  }

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
      <Form.Control type="text" onChange={e => setNometprenom(e.target.value)} placeholder="Nom et prenom" />
      <Form.Label>Ticket Title</Form.Label>
      <Form.Control type="text" onChange={e => setTitle(e.target.value)} placeholder="Name Ticket" />
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Departement</Form.Label>
      <Form.Select onChange={e => setDepartement(e.target.value)} defaultValue="Choose...">
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
      <Form.Control onChange={e => setDescription(e.target.value)} as="textarea" rows={3}  />
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
  <Button variant="primary" onClick={handleSubmit} type="button" style={{marginBottom:"4%"}}>
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
