import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthWrapper from '../features/auth/view/AuthWrapper';
import Login from '../features/auth/view/Login';
import Signup from '../features/auth/view/Signup';
import UserPage from '../features/user/view/UserPage';
import Home from '../screens/Home';

const AuthNav: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Signup />} />
      <Route
        path="/user-profile"
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
