import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import StatusCard from "./StatusCard";
import axios from "axios";

const  AdminInformations=()=> {

	// Constructor
    const [items,setItems] = useState([]);
    const [statsRH,setStatsRH] = useState([]);
    const [statsDAF,setStatsDAF] = useState([]);
    const [statsPursh,setStatsPursh] = useState([]);
    const [statsRndD,setStatsRndD] = useState([]);
    const [statsDEP,setStatsDEP] = useState([]);
    
    
    const [dataisLoaded, setLoaded] = useState(false);
	

    const handleClick=(e)=> {
            console.log(e.target.id);
            (async () => {
                const response = await axios.delete("http://localhost:3002/employer_liste/"+e.target.id);
            })(); 
    }
	// ComponentDidMount is used to
	// execute the code
	useEffect(()=> {
		fetch(
    "http://127.0.0.1:8000/api/employers")
			.then((res) => res.json())
			.then((json) => {
				setItems(json);
                setLoaded(true);
			});
	},[])
		if (!dataisLoaded) return <div><h1> Pleses wait some time.... </h1> </div> ;
		return (
		<div className = "md:m-10">
            <AdminSidebar />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 mb-4">
            <StatusCard
                            color="pink"
                            icon="work"
                            title="Département R&D"
                            percentage={statsRndD.countReclamation}
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="pink"
                            icon="work"
                            title="Département RH"
                            percentage={statsRH.countReclamation}
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="orange"
                            icon="poll"
                            title="Departement Déploiment"
                            percentage={statsDEP.countReclamation}
                            percentageIcon="arrow_upward"
                            percentageColor="red"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Département Achats"
                            percentage={statsPursh.countReclamation}
                            percentageIcon="arrow_upward"
                            percentageColor="orange"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="blue"
                            icon="groups"
                            title="Departement DAF"
                            percentage={statsDAF.countReclamation}
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Récalamtions"
                        />
            </div>
            <Card>
                <CardHeader color="blue" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Liste des employers</h2>
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
                                    ID
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Nom & prénom
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Email
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Département
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Role
                                </th>

                            </tr>
                        </thead>
                        <tbody>
			{
				items.map((item) => (
                <tr key={item.id}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.id}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.nom } {item.prenom}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.email}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.departement}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.role}
                    </td>
                    <td>
                        <Button  
                        id = {item.id}
                        onClick = {handleClick}
                        >
                        Supprimer
                        </Button> 
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
        
	);
}

export default AdminInformations;
