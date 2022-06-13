import { useParams } from "react-router-dom";
import {
  Alert,
  Card,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Heading5 } from "@material-tailwind/react";
import { CardBody, CardFooter, CardHeader } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";

export const  Reclamations =() =>{
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => setOpen(!open);
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3002/reclamation_list");
      setFetchedData(data.data);
      console.log(fetchedData);
    };
    getData();
  }, []);

  return (
    <div className='grid grid-cols-3 gap-5 m-10'>
      {fetchedData.map((item) => (
        <Card className='w-96 mt-6'>
          <CardHeader color='blue' className='relative h-56'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              fill='currentColor'
              class='bi bi-chat-left-text'
              viewBox='0 0 16 16'>
              <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
              <path d='M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z' />
            </svg>
          </CardHeader>
          <CardBody className='text-center'>
            <Heading5 className='m-5'> {item.soumispar} </Heading5>
            <Alert className='text-center'>
              Date de soumission: {item.date}{" "}
            </Alert>
            <p>
              {item.description}
              {/* The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona. */}
            </p>
          </CardBody>
          <CardFooter divider className='flex items-center py-3'>
            <div className='text-end'></div>
            <Button onClick={handleOpen}>Traiter Cette Réclamations</Button>
            <Modal color='orange' active={open} toggler={handleOpen}>
              <ModalHeader>
                Affecter cette réclamation à un chef de service
              </ModalHeader>
              <ModalBody>
                <div className='my-3'>
                  <h6>Choisir le chef de service </h6>
                  <select
                    name='role'
                    class='block w-64 text-gray-700 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'>
                    <option value='Admin' class='text-gray-400'>
                      Chef Service 1
                    </option>
                    <option value='AdminDAF'>Chef Service 2</option>
                    <option value='DirecteurTechnique'>Chef Service 3</option>
                    <option value='Employer'>Chef Service 4</option>
                    <option value='Client'>Chef Service 5</option>
                    <option value='Ressource'>Chef Service 6</option>
                    <option value='goldfish'>Chef Service 7</option>
                    <option value='goldfish'>Chef Service 8</option>
                  </select>
                </div>
                <h6>Choisir la date limite à traiter</h6>
                <div className='m-3'>
                  <input type='date'></input>
                </div>
                <Button> Submit</Button>
              </ModalBody>
            </Modal>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
