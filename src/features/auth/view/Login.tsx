import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { UseSetToken } from '../hooks/UseSetToken';
import loginApi from '../api/login';
import { IAuth } from '../types/Auth';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants/routes';

const Login = () => {
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);
  const { setJwtHandler } = UseSetToken();
  const navigator = useNavigate();

  const loginHandler = async () => {
    if (email && password) {
      const resp: IAuth = await loginApi({
        email,
        password,
      });
      //TODO: REDIRECT AND SETUP AUTH SYSTEM
      if(resp && resp.access_token){
        setJwtHandler(resp.access_token);
        setTimeout(() => {
          navigator(Routes.USER_PROFILE, { replace: true });
        }, 500);
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        borderWidth: 2,
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        User Login
      </Typography>
      <TextField
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        sx={{ mr: 2 }}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic-pass"
        label="Password"
        variant="outlined"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button
        onClick={loginHandler}
        variant="contained"
        sx={{ justifySelf: 'flex-end' }}
        color="primary"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
