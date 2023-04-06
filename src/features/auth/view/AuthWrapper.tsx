import React from 'react';

type TypeUserAuthWrapperProps = {
  children: React.ReactNode; // 👈️ added type for children
};
const AuthWrapper = (props: TypeUserAuthWrapperProps) => {
  /**
   * //TODO: ADD AUTH LOGIC
   *
   * */
  // const { isLogged, setCurrentUser, removeCurrentUserLogout } = useContext(AuthContext)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!isLogged) {
  //     const jwt = localStorage.getItem('coffeeTeamJWT');
  //     if(jwt=== undefined || jwt=== 'undefined' ){
  //       removeCurrentUserLogout();
  //       navigate('/Login', { replace: true })
  //     }
  //     // temp fix. Later create logic for make call to server to varify token.
  //     if (jwt && jwt !== '' && jwt!==undefined) {
  //       const decodedJwt = jwt_decode<IUser | null>(jwt)
  //       if (decodedJwt) {
  //         const user = {...decodedJwt, token: jwt}
  //         setCurrentUser(user);
  //         navigate('/', { replace: true });
  //       }
  //     }
  //     // else
  //     navigate('/Login', { replace: true });
  //   }
  // }, [isLogged, navigate]);

  return <>{props.children}</>;
};

export default AuthWrapper;
