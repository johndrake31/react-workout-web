import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../../../constants/routes';
import { useAppSelector } from '../../../hooks';
import { selectToken } from '../store/authSlice';
import { IAuthDecoded } from '../types/Auth';

type TypeUserAuthWrapperProps = {
  children: React.ReactNode; // 👈️ added type for children
};
const AuthWrapper = (props: TypeUserAuthWrapperProps) => {

  const jwt = useAppSelector(selectToken);
  const navigator = useNavigate();
  useEffect(() => {
    if (!jwt) return;
    const decodedJwt = jwtDecode<IAuthDecoded | null>(jwt);
    !decodedJwt && navigator(Routes.LOGIN, { replace: true });
  }, [jwt, navigator]);



  return <>{props.children}</>;
};

export default AuthWrapper;
