import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import StatusCard from "./StatusCard";
import { Progress } from "@material-tailwind/react";
import ChartBar from "./ChartBar";
import { debounce } from "@mui/material";
import axios from 'axios'

function AdminReclamations() {
  const [items, setItems] = useState([]);
  const [stats, setStats] = useState([]);
  const [diagramme, setDiagramme] = useState([]); 

  const [Loaded, setLoaded] = useState(false);
 const timer =setTimeout(() =>{setLoaded(true)},1000)
  useEffect(() => {
    const fetchData1 = async () =>{
     const iteem = await axios("http://127.0.0.1:8000/api/reclamation")
       setItems(iteem.data[0])
         }

          const fetchData2 = async () => {
           const staat = await axios(
             "http://127.0.0.1:8000/api/reclamation"
           );
           setStats(staat.data[1]);
          };
 const fetchData3 = async () => {
   const diag = await axios(
            "http://127.0.0.1:8000/api/reclamation"
          );
          setDiagramme(diag.data[2]);};

          
          
      
     
        fetchData1()
        fetchData2(), 
      fetchData3()
     
    console.log(items);
    console.log(diagramme);
    console.log(stats)

     return ()=>{  clearTimeout(timer)}
    
  },[Loaded]);
  if (!Loaded)return (
      <div>
       <h1> wait some time...</h1>
      </div>
    );
  return (
    <div className='md:m-10'>
      <AdminSidebar />
      <div className='grid grid-cols-1 m-10 lg:grid-cols-2 xl:grid-cols-5'>
        <StatusCard
          color='pink'
          icon='work'
          title='Département R&D'
          percentage={stats[3].countReclamation}
          percentageIcon='arrow_upward'
          percentageColor='orange'
          date='Réclamations'
        />
        <StatusCard
          color='pink'
          icon='work'
          title='Département RH'
          percentage={stats[0].countReclamation}
          percentageIcon='arrow_upward'
          percentageColor='red'
          date='Réclamations'
        />
        <StatusCard
          color='orange'
          icon='poll'
          title='Departement Déploiment'
          percentage={stats[4].countReclamation}
          percentageIcon='arrow_upward'
          percentageColor='red'
          date='Réclamations'
        />
        <StatusCard
          color='purple'
          icon='paid'
          title='Département Achats'
          percentage={stats[2].countReclamation}
          percentageIcon='arrow_upward'
          percentageColor='orange'
          date='Réclamations'
        />
        <StatusCard
          color='blue'
          icon='groups'
          title='Departement DAF'
          percentage={stats[1].countReclamation}
          percentageIcon='arrow_upward'
          percentageColor='orange'
          date='Récalamtions'
        />
      </div>
      <div className='px-3 md:px-8 h-auto'>
        <div className='container mx-auto max-w-full'>
          <div className='grid grid-cols-1 xl:grid-cols-5'>
            <div className='xl:col-start-1 xl:col-end-4 px-4 mb-14'>
              <ChartBar data={diagramme} />
            </div>
            <div className='xl:col-start-4 xl:col-end-6 px-4 mb-14'>
              <Card>
                <CardHeader color='purple' contentPosition='none'>
                  <div className='w-full flex items-center justify-between'>
                    <h2 className='text-white text-xl'>
                      Taux de satisfaction des employers
                    </h2>
                    <Button
                      color='transparent'
                      buttonType='link'
                      size='md'
                      style={{ padding: 0,width:'70px' }}>
                      See More
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className='overflow-x-auto'>
                    <table className='items-center w-full bg-transparent border-collapse'>
                      <thead className='thead-light'>
                        <tr>
                          <th className='px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left'>
                            Département
                          </th>
                          <th className='px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left'>
                            Employers
                          </th>
                          <th className='px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56'>Taux De Satisfaction</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stats.map((stat) => (
                          
                            <tr key={stat.id}>
                              <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left'>
                                {stat.departement}
                              </th>
                              <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left'>
                                {stat.countEmployees}
                              </td>
                              <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left'>
                                <Progress
                                  color='blue'
                                  value={stat.Tsat}
                                />
                              </td>
                            </tr>
                          
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader color='purple' contentPosition='none'>
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-white text-2xl'>Liste des réclamations </h2>
            <Button
              color='transparent'
              buttonType='link'
              size='lg'
              style={{ padding: 2 }}>
              See More
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <div className='overflow-x-auto'>
            <table className='items-center w-full bg-transparent border-collapse'>
              <thead>
                <tr>
                  <th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left'>
                    Numéro
                  </th>
                  <th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left'>
                    Propriètaire
                  </th>
                  <th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left'>
                    Statut
                  </th>
                  <th className='px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left'>
                    Departement
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left'>
                      {item.id}
                    </th>
                    <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left'>
                      {item.nom_prenom}
                    </td>
                    <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left'>
                      {item.status}
                    </td>
                    <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left'>
                      {item.departement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AdminReclamations;
