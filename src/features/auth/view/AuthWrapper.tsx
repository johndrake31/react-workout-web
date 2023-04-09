import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../../../constants/routes';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getLocalToken } from '../helpers/locStorage.helper';
import { selectToken } from '../store/authSlice';
import { setToken as setNewToken, setUser } from '../store/authSlice';
import { IAuthDecoded } from '../types/Auth';

type TypeUserAuthWrapperProps = {
  children: React.ReactNode; // 👈️ added type for children
};
const AuthWrapper = (props: TypeUserAuthWrapperProps) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const jwt = getLocalToken();
  const navigator = useNavigate();
  useEffect(() => {

    if (!jwt) navigator(Routes.LOGIN, { replace: true });
    if (jwt) {
      const decodedJwt = jwtDecode<IAuthDecoded | null>(jwt);
      !decodedJwt && navigator(Routes.LOGIN, { replace: true });
      //Check redux and update if needed.
      if (jwt && !token && decodedJwt) {
        dispatch(setNewToken(jwt));
        dispatch(setUser(decodedJwt));
      }
    }
  }, [jwt, navigator, dispatch, token]);

  return <>{props.children}</>;
};

export default AuthWrapper;
