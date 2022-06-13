import React, { useState,useEffect } from 'react'
import {
  Card,
 
  CardBody,
  Icon,
  CardFooter,
  CardHeader,
  Alert,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import H5 from "@material-tailwind/react/Heading5";
import RapportForm from "components/RapportForm";
import { useParams } from "react-router-dom";



function ProfileService({id}) {
/* const { id } = useParams(); */
const [items,setItems] = useState([])
const [profileDetails, setprofileDetails] = useState([]);



useEffect(() => {
     if (!(id in [1, 2, 3, 4])) id = 1;
      var path = "http://localhost:3002/chef_service/"+id;
      fetch("http://localhost:3002/reclamation_list")
        .then((res) => res.json())
        .then((json) => {
         setItems(json)
        });
      fetch(path)
        .then((res) => res.json())
        .then((json) => {
         setprofileDetails(json)
        });
})

  return (
		<div className = "md:mr-64 mt-24 mb-24">
            <Card>
            <div className="text-center">
                <H5 color="gray">{profileDetails.nom}</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                    {profileDetails.email}
                </div>
                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                    <Icon name="work" size="xl" />
                    {profileDetails.role}
                </div>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="account_balance" size="xl" />
                    {profileDetails.Departement}  
                </div>
            </div>
            <CardFooter>
                <div className="w-full flex justify-center -mt-8">
                    <a
                        href="#pablo"
                        className="mt-5"
                        onClick={(e) => e.preventDefault()}
                    >
                    </a>
                </div>
            </CardFooter>
        </Card>
        <div className = "m-24">
            <Card>
                <CardHeader color="blue" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Réclamations à traiter</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            See More
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Numéro
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Soumise par
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Statut
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Date Limite                                   
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        items.map((item) => (
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {item.id}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {item.soumispar}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Alert className="p-3" > {item.statut} </Alert>
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {item.Date}
                                </td>
                            </tr>
                        ))
                    }            
              </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
        </div>  
        <RapportForm />
        </div>
        );
    }



export default ProfileService