import { List, ListItem, Typography, TextField,Button, Link } from '@material-ui/core';
import React, {useState, useContext, useEffect} from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import axios from 'axios';
import { Store } from '../utils/Store';
import {useRouter} from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
  const router = useRouter();
  const { redirect } = router.query; //login?redirect=/shipping
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;


  useEffect(() => {
      if (userInfo) {
      router.push('/');
    }
  },[])


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const classes = useStyles();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post('/api/users/login', { email, password });
      dispatch({ type: 'USER_LOGIN', payload: data })
      Cookies.set('userInfo', data);
      router.push(redirect || '/');

    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data ? err.response.data.message : err.message);
    }



  }

  return (
    <Layout title="Login">
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography variant="h1" component="h1">Login</Typography>
        <List>
          <ListItem>
            <TextField variant="outlined" value={email} onChange={e => setEmail(e.target.value)} fullWidth id="email" label="Email" inputProps={{type: "email"}}></TextField>
          </ListItem>
           <ListItem>
            <TextField variant="outlined" fullWidth id="password" value={password} onChange={e => setPassword(e.target.value)} label="password" inputProps={{type: "password"}}></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
          </ListItem>
          <ListItem>
            Don&apos;t have an account? {' '} &nbsp; <NextLink href="/register" passHref><Link>Register</Link></NextLink>
          </ListItem>

        </List>
      </form>
      </Layout>
  );
}
