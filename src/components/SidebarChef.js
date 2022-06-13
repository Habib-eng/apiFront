import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";

export default function SidebarChef(data) {
  console.log(data.idChef);
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const reclamations_path = "/chefs/" + data.idChef + "/reclamations";
  const statistiques_path = "/chefs/" + data.idChef + "/statistiques";
  const satisfaction_path = "/chefs/" + data.idChef + "/satisfaction";
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}>
        <div className='flex-col items-stretch min-h-full flex-nowrap px-0 relative'>
          <a
            target='_blank'
            rel='noreferrer'
            className='mt-2 text-center w-full inline-block'>
            <H6 color='gray'>Chef Départment</H6>
          </a>
          <div className='flex flex-col'>
            <hr className='my-4 min-w-full' />

            <ul className='flex-col min-w-full flex list-none'>
              <li className='rounded-lg mb-2'>
                <NavLink
                  to={reclamations_path}
                  className='flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg'
                  activeclassname='bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md'>
                  <Icon name='settings' size='2xl' />
                  Réclamations
                </NavLink>
              </li>
              <li className='rounded-lg mb-2 '>
                <NavLink
                  to={satisfaction_path}
                  className='flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg'
                  activeclassname='bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md'>
                  <Icon name='toc' size='2xl' />
                  Satisfaction des Employers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
