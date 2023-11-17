import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import logo from "../assets/smug_ticket.png";

function AuthGoogle(props) {
  const clientID = "151373060419-hflbjm4m12o1odr0frs1v4ad7rvpael6.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientID
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log(res);
  };

  const onFailure = () => {
    console.log("SALIO MAL :C");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">Smug Ticket</h2>
        <div>
        <img src={logo} alt="logo" className="w-64" />
      </div>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
          className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
        />
      </div>
    </div>
  );
}

export default AuthGoogle;
