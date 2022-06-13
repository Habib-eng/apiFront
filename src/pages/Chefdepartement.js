import React from 'react'
import SidebarChef from "components/SidebarChef";
import { Routes, Route, Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProfileCard from "components/ProfileCard";
import {Satisfactions} from "components/ChefDepartement/Satisfactions";
import  {Reclamations}  from "components/ChefDepartement/Reclamations";

function Chefdepartement() {
    const { id } = useParams();
  return (
    <div>
      <SidebarChef idChef={id} />
      <Routes>
        <Route
          
          path='/chefs/:id/reclamations'
          element={<Reclamations />}></Route>
        <Route
          
          path='/chefs/:id/satisfaction'
          element={<Satisfactions />}></Route>
      </Routes>
      <div className='px-24 m-24'></div>
    </div>
  );
}

export default Chefdepartement