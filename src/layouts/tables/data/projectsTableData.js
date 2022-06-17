/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import { useEffect, useState } from "react";

export default function data() {
  
  const [ticketList, setTicketList] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/myReclamations')
    .then( (response) => response.json())
    .then( (data) => setTicketList(data))
  },[]);

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  let rows = [];
  ticketList.map((item) => {
    rows.push(
      {
        ticket: <Project name="Ticket 1" />,
        start: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        end: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        )
      }
    )
  })
  return {
    columns: [
      { Header: "ticket", accessor: "ticket", width: "30%", align: "left" },
      { Header: "start", accessor: "start", align: "left" },
      { Header: "end", accessor: "end", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows
  };
}
