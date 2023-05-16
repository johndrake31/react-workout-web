import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../constants/routes';
import { removeLocalToken } from '../features/auth/helpers/locStorage.helper';
import { removeToken, selectToken } from '../features/auth/store/authSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const Header = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);

  const loginOutHandler = () => {
    if (!token) navigator(Routes.USER_PROFILE, { replace: true });
    if (token) {
      removeLocalToken();
      dispatch(removeToken());
      setTimeout(() => {
        navigator(Routes.LOGIN, { replace: true });
      }, 500);
    }
  };
  return (
    <>
      <AppBar position="fixed" sx={{}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{
              mr: 2,
              '&:hover': {
                backgroundColor: 'primary',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="secondary"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          {
            <Button
              color="secondary"
              onClick={() => {
                loginOutHandler();
              }}
            >
              {!token ? 'Login' : 'Logout'}
            </Button>
          }
        </Toolbar>
      </AppBar>
      <Box sx={{ mb: 5 }} />
    </>
  );
};

export default Header;
