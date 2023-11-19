import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';  // Añade GoogleOAuthProvider aquí
import logo from '../../assets/smug_ticket.png'
import {jwtDecode} from 'jwt-decode'
import authService from '../../services/Auth/AuthService';
import context from '../../Context/UserContext';
import rolService from '../../services/Auth/RolService';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from '../../routes/AppRouter';

function AuthGoogle(props) {
  const clientID = "151373060419-hflbjm4m12o1odr0frs1v4ad7rvpael6.apps.googleusercontent.com";
  const navigate = useNavigate();
  const [client, setClient] = useState(false);
  const name = "MArta";
  //const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientID
      });
    };
    gapi.load("client:auth2", start);
  }, []);
  /*
  useEffect(()=>{
    if (client) {
      console.log(client);
      //navigate('/user/prueba', { state: { myRol: "Cliente" } });
      //<AppRouter myRol={client} />;
      //navigate('/user/prueba');
    }
  },[client]);
  */

  const handleLogin = async(data) =>{

    const res = await context.login(data.email);
    if(res.status == 200){
      //useAuth();
      console.log("Inicio de sesión exitoso!")
      navigate('/prueba2');
      //getRole();
      //console.log(name);
      //<AppRouter myRol={name} />;
      //navigate('/user/prueba');
      //userLogged();
    }else{
      console.log("Error al iniciar sesión!")
    }
  }
  /*
  const getRole = async() =>{
    const token = context.getToken();
    try {
        const id = await authService.verifyToken(token);
        console.log(id);
        const rol = await rolService.getRoles(id,token);
        console.log(rol);
        rol.forEach(element =>{
          if (element === "Cliente") {
          setClient(true);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
*/
  const onFailure = () => {
    console.log("SALIO MAL :C");
  };

  return (
    <GoogleOAuthProvider clientId={clientID}>  {/* Agrega GoogleOAuthProvider aquí */}
      <div className="flex justify-center bg-[#E3C4A8] items-center h-screen">
        <div className="max-w-md mx-auto bg-[#F1F1F1F1] p-8 rounded-lg shadow-2xl text-center">
          <h2 className="text-2xl font-bold">Smug Ticket</h2>
          <h3 className="text-2xl font-bold">Login</h3>
          <div>
            <img src={logo} alt="logo" className="w-64" />
          </div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleLogin(jwtDecode(credentialResponse.credential));
            }}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default AuthGoogle;
