import { Route,Routes } from "react-router-dom"
import ProfileService from "./ProfileService"
import AdminReclamations from "components/AdminReclamations"
import AdminInformations from "components/AdminInformations"
import Chefdepartement from "./Chefdepartement"

export default function Admin() {
    
    return (
        <>
          <div className='md:ml-64'>
            <h1>Hello Admin</h1>
            <Routes>
              <Route path='/chefs/:id' element={<Chefdepartement />} />
              <Route path='/profileService/:id' element={<ProfileService />} />
              <Route path='/Admin/infos' element={<AdminInformations />} />
              <Route path='/Admin/reclamations' element={<AdminReclamations />} />
            </Routes>
            <Footer/>
          </div>
        </>
      )   
}