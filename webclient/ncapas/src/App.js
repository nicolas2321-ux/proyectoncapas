import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Example } from './pages/example';
import { Route, Routes } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Events } from './pages/events';
import { VerEventos } from './pages/verEventos';

function App() {
  return (
  <>
    <GoogleOAuthProvider clientId="151373060419-t0tal8arp2l7t615oofsts6hdpihcpi4.apps.googleusercontent.com">
  <Routes>
    <Route path='/events' element = {<Events></Events>} />
    <Route path='/' element = {<Example></Example>}/>
    <Route path='/verEventos' element = {<VerEventos></VerEventos>} />
  </Routes>
  </GoogleOAuthProvider>
  </>
  );
}

export default App;
