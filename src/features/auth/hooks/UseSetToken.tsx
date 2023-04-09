import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../hooks';
import { storeLocalToken } from '../helpers/locStorage.helper';
import { setToken as setNewToken, setUser } from '../store/authSlice';
import { IAuthDecoded } from '../types/Auth';

export const UseSetToken = () => {
  const [token, setToken] = useState<string| undefined>();
  const dispatch = useAppDispatch();

  const setJwtHandler = (jwt:string)=>{
    setToken(jwt)
  }
  useEffect(() => {
    if(!token) return;
    const decodedJwt = jwtDecode<IAuthDecoded | null>(token);
    if (!decodedJwt) return;
    console.log(decodedJwt);
    storeLocalToken(token);
    dispatch(setNewToken(token));
    dispatch(setUser(decodedJwt));
    
  }, [token, dispatch]);

  return { setJwtHandler };
};
