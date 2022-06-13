import React, { useEffect, useState } from "react";
import ChartLine from "components/ChartLine";
export const Satisfactions =()=> {
  // Constructor

const [diagramme, setDiagramme] = useState([]);
 
  // ComponentDidMount is used to
  // execute the code
  useEffect(()=> {
    fetch("http://localhost:3002/satisfaction_liste")
      .then((res) => res.json())
      .then((json) => {
        setDiagramme(json)
      });
  })
  
    return <ChartLine data={diagramme} />;
  }



