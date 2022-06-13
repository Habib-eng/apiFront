import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Image from "@material-tailwind/react/Image";
import H5 from "@material-tailwind/react/Heading5";
import Icon from "@material-tailwind/react/Icon";
import LeadText from "@material-tailwind/react/LeadText";
import Button from "@material-tailwind/react/Button";
import ProfilePicture from "assets/img/team-1-800x800.jpg";
import { useEffect, useState } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProfileCard() {
  const { id } = useParams();
  const [chefInfo, setChefInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "http://localhost:3002/employer_liste_test/" + id
      );
      setChefInfo(data.data);
    };
    getData();
  }, []);
  return (
    <Card>
      <div className='flex flex-wrap justify-center'>
        <div className='w-48 px-4 -mt-24'>
          <Image src={ProfilePicture} rounded raised />
        </div>
        <div className='w-full flex justify-center py-4 lg:pt-4 pt-8'>
          <div className='p-4 text-center'>
            <span className='text-xl font-medium block uppercase tracking-wide text-gray-900'>
              22
            </span>
            <span className='text-sm text-gray-700'>Friends</span>
          </div>
          <div className='p-4 text-center'>
            <span className='text-xl font-medium block uppercase tracking-wide text-gray-900'>
              89
            </span>
            <span className='text-sm text-gray-700'>Comments</span>
          </div>
          <div className='p-4 text-center'>
            <span className='text-xl font-medium block uppercase tracking-wide text-gray-900'>
              10
            </span>
            <span className='text-sm text-gray-700'>Photos</span>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <H5 color='gray'>{chefInfo.nom}</H5>
        <div className='mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2'>
          <Icon name='place' size='xl' />
          Chef Departement
        </div>
        <div className='mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2'>
          <Icon name='work' size='xl' />
          {chefInfo.departement}
        </div>
        <div className='mb-2 text-gray-700 flex items-center justify-center gap-2'>
          <Icon name='phone' size='xl' />
          {chefInfo.mobile}
        </div>
      </div>
      <CardBody>
        <div className='border-t border-lightBlue-200 text-center px-2 '>
          <LeadText color='blueGray'>{chefInfo.description}</LeadText>
        </div>
      </CardBody>
      <CardFooter>
        <div className='w-full flex justify-center -mt-8'>
          <a href='#pablo' className='mt-5' onClick={(e) => e.preventDefault()}>
            <Button color='purple' buttonType='link' ripple='dark'>
              Show more
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
