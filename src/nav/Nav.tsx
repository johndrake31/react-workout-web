import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Routes as NavRoutes } from '../constants/routes';
import AuthWrapper from '../components/auth/view/AuthWrapper';
import Login from '../components/auth/view/Login';
import Signup from '../components/auth/view/Signup';
import UserPage from '../components/user/view/UserProfile';
import Home from '../screens/Home';

const AuthNav: React.FC = () => {
  const { HOME, LOGIN, SIGNUP, USER_PROFILE } = NavRoutes;
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={SIGNUP} element={<Signup />} />
      <Route
        path={USER_PROFILE}
        element={
          <AuthWrapper>
            <UserPage />
          </AuthWrapper>
        }
      />
      {/* TODO: ADD AUTH WRAPPER TO NEEDED ROUTES */}
    </Routes>
  );
};

export default AuthNav;
