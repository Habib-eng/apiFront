import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import Footer from 'components/Footer';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import react,{  useState } from 'react';
import axios from 'axios';

export default function Login() {


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("ApiUrl",JSON.stringify({user,pwd}),
            {
                headers: {'Content-Type' : 'application/json'},
                withCredentials:true
            });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
        }

        finally{
            console.log("partie liée au backend");
        }
    }

    return (
        <div className='-ml-96'>
            <Page>
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader>
                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Remember Me"
                                id="remember"
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="submit"
                                size="lg"
                                ripple="dark"
                                onSubmit={handleSubmit}
                           >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
            <Footer />
        </Page>
        </div>
    );
}
