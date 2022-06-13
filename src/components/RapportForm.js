import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";

export default function RapportForm() {
  return (
    <Card>
      <CardHeader color='purple' contentPosition='none'>
        <div className='w-full flex items-center justify-between'>
          <h2 className='text-white text-2xl'>
            Ajouter votre rapport pour une réclamation
          </h2>
        </div>
      </CardHeader>
      <CardBody>
        <form>
          <h6 className='text-purple-500 text-sm my-6 font-light uppercase'>
            Informations globales
          </h6>
          <div className='flex flex-wrap mt-10'>
            <div className='w-full lg:w-6/12 pr-4 mb-10 font-light'>
              <Input
                type='text'
                color='purple'
                placeholder='Code de réclamation'
              />
            </div>
            <div className='w-full lg:w-6/12 pl-4 mb-10 font-light'>
              <Input
                type='email'
                color='purple'
                placeholder='Email de propriètaire'
              />
            </div>
            <div className='w-full lg:w-6/12 pr-4 mb-10 font-light'>
              <Input type='text' color='purple' placeholder='Etat' />
            </div>
            <div className='w-full lg:w-6/12 pl-4 mb-10 font-light'>
              <Input
                type='number'
                color='purple'
                placeholder='Niveau de priorité'
                min='0'
                max='5'
              />
            </div>
          </div>
          <h6 className='text-purple-500 text-sm my-6 font-light uppercase'>
            Traitement de la tache
          </h6>
          <div className='flex flex-wrap mt-10'>
            <div className='w-full lg:w-6/12 mb-10 font-light'>
              <Input type='date' color='purple' placeholder='Date de début' />
            </div>
            <div className='w-full lg:w-6/12 pl-4 mb-10 font-light'>
              <Input
                type='date'
                color='purple'
                placeholder='Date estimée pour terminer'
              />
            </div>
          </div>
          <h6 className='text-purple-500 text-sm my-6 font-light uppercase'>
            Description
          </h6>
          <div className='flex flex-wrap mt-10 mb-10 font-light'>
            <Textarea color='purple' placeholder='Décrire la réclamation ici' />
          </div>
          <div className='flex justify-center'>
            <Button variant='gradient' buttonType='submit'>
              Envoyer ce rapport
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
