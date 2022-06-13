import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Tailwind CSS Style Sheet

import { Navbar } from "@material-tailwind/react";
import Chefdepartement from "pages/Chefdepartement";
import ProfileService from "pages/ProfileService";
import AdminInformations from "components/AdminInformations";
import AdminReclamations from "components/AdminReclamations";
import AdminAjout from "components/AdminAjout";
import Footer from "components/Footer";
import Login from "pages/Login";

function App() {
  return (
    <>
      <div className='md:ml-64'>
        <Routes>
          <Route path='/chefs/:id' element={<Chefdepartement />} />
          <Route
          exact
            
            path='/profileService/:id'
            element={<ProfileService />}
          />
          <Route path='/Admin/infos' element={<AdminInformations />} />
          <Route path='/Admin/reclamations' element={<AdminReclamations />} />
          <Route path='/Admin/Ajout' element={<AdminAjout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Navigate to='/Admin/infos' />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
