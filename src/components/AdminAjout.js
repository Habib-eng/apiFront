import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

 const AdminAjout = () => {
  // Constructor
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { nom, prenom, mobile, email, description, role, departement } =formData;

  const handleSubmit = (event) => {
    alert("Le nom a été soumis : ");
    event.preventDefault();
    //faire un appel api backend avec axios
    axios
      .post("http://127.0.0.1:8000/api/personnel", formData)
      .then((res) => console.log(res));
  };

  return (
    <div className='m-64 mt-8'>
       <AdminSidebar /> 
      <Card>
        <CardHeader color='purple' contentPosition='none'>
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-white text-center text-2xl'>
              Ajouter un membre
            </h2>
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <h6 className='text-purple-500 text-sm mt-3 mb-6 font-light uppercase'>
              Informations Générales
            </h6>
            <div className='flex flex-wrap mt-10'>
              <div className='w-full lg:w-6/12 pr-4 mb-10 font-light'>
                <Input
                  onChange={handleChange}
                  name='nom'
                  value={nom}
                  type='text'
                  color='purple'
                  placeholder='Nom'
                />
              </div>
              <div className='w-full lg:w-6/12 pl-4 mb-10 font-light'>
                <Input
                  onChange={handleChange}
                  name='prenom'
                  type='text'
                  value={prenom}
                  color='purple'
                  placeholder='Prenom'
                />
              </div>
              <div className='w-full lg:w-6/12 pr-4 mb-10 font-light'>
                <Input
                  onChange={handleChange}
                  name='email'
                  value={email}
                  type='email'
                  color='purple'
                  placeholder='Adresse email'
                />
              </div>
              <div className='w-full lg:w-6/12 pl-4 mb-10 font-light'>
                <Input
                  onChange={handleChange}
                  name='mobile'
                  value={mobile}
                  type='text'
                  color='purple'
                  placeholder='Téléphone Mobile'
                />
              </div>
            </div>
            <h6 className='text-purple-500 text-sm my-6 font-light uppercase'>
              Informations Professionels
            </h6>
            <div className='flex flex-wrap mt-10'>
              <div className='w-full lg:w-6/12 pr-4 mb-10 font-light'>
                <label htmlFor='name-with-label' className='mb-8 text-gray-700'>
                  Role
                </label>
                <select
                  name='role'
                  onChange={handleChange}
                  selected={role}
                  className='block w-96 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'>
                  <option value='Admin' className='text-gray-400'>
                    Admin
                  </option>
                  <option value='AdminDAF'>Admin DAF</option>
                  <option value='DirecteurTechnique'>
                    Directeur Technique
                  </option>
                  <option value='Employer'>Employer</option>
                  <option value='Client'>Client</option>
                  <option value='Ressource'>
                    CHef Departement Ressource Humaines
                  </option>
                  <option value='goldfish'>Chef Service</option>
                  <option value='goldfish'>Chef Departement</option>
                </select>
              </div>
              <div className='w-full lg:w-6/12 pl-4 mb-10 font-light'>
                <label htmlFor='name-with-label' className='mb-8 text-gray-700'>
                  Choisir un département
                </label>
                <select
                  onChange={handleChange}
                  name='departement'
                  selected={departement}
                  className='block w-96 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'>
                  <option className='text-gray-400' value='RndD'>
                    R&D
                  </option>
                  <option value='Deployment'>Deployment</option>
                  <option value='RH'>RH</option>
                  <option value='Purchases'>Purchases</option>
                  <option value='DAF'>DAF</option>
                </select>
              </div>
            </div>
            <h6 className='text-purple-500 text-sm my-6 font-light uppercase'>
              Description
            </h6>
            <div className='flex flex-wrap mt-10 font-light'>
              <Textarea
                name='description'
                value={description}
                color='purple'
                placeholder='Description'
                onChange={handleChange}
              />
            </div>
            <div className='mt-8 flex justify-center'>
              <Button variant='gradient' buttonType='submit'>
                Ajouter
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
export default AdminAjout;