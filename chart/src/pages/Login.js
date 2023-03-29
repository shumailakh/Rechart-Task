import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from '../components/Card';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Box, Button,TextField } from '@mui/material';
// import CardBody from '../components/CardBody';
import Dashboard from './Dashboard';
import './Login.css'


const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const fromSubmit = (e) => {
        e.preventDefault();
      
        if (user.username !== '' && user.password !== '') {
            console.log(JSON.stringify(user));
            navigate("dashboard");
        }
        else {
            alert('Please Enter Details');
        }
    };
    const onChange = (e) => {
        let data = { ...user };
        let name = e.target.name;
        let val = e.target.value;
        if (name == 'username' || name == 'password') {
            data = { ...data, [name]: val };
        }
        setUser(data);
    };



    return (
        <div className='bg-color'>
            <Container className='padding'>
                <div style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems:'center',
                    margin:'auto',
                    width: '50%'
                }}>
                    <Box color="white">
                        <Grid item xs={12} md={12}>

                            <CardComponent className='card mt-5'>
                                <CardHeader id="title" title="Enter Login Details" />

                                <CardContent>
                                    <form>
                                        <Grid item xs={12} md={12}>

                                        <TextField id="outlined-basic"  variant="outlined"  type="text" 
                                                value={user.username} name="username" onChange={onChange} className="width p2" placeholder='Enter username'/>
                                       
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <TextField id="outlined-basic"  variant="outlined" 
                                                type="password"
                                                
                                                placeholder='Enter Password'
                                                className='width p2'
                                                value={user.password} name="password" onChange={onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Button variant="outlined" type="submit" onClick={fromSubmit} className='p2'>Submit</Button>
                                        </Grid>

                                    </form>
                                </CardContent>
                            </CardComponent>


                        </Grid>

                    </Box>
                </div>
            </Container>
        </div>

    );
}

export default Login





