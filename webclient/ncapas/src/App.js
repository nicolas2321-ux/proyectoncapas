import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Example } from './pages/example';
import { Route, Routes } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Events } from './pages/events';
import { VerEventos } from './pages/verEventos';
import { UserAdmin } from './pages/userAdmin';
import { Myevents } from './pages/user/myevents';
import { VerEvento } from './pages/user/verEvento';
import { ComprarBoleto } from './pages/user/comprarBoleto';
import { Stadistics } from './pages/estadistics';
import { ModerarUsuarios } from './pages/moderador/moderarUsuarios';

function App() {
  return (
  <>
    <GoogleOAuthProvider clientId="151373060419-hflbjm4m12o1odr0frs1v4ad7rvpael6.apps.googleusercontent.com">
  <Routes>
    <Route path='/events' element = {<Events></Events>} />
    <Route path='/' element = {<Example></Example>}/>
    <Route path='/verEventos' element = {<VerEventos></VerEventos>} />
    <Route path='/userAdmin' element = {<UserAdmin></UserAdmin>} />
    <Route path='/myEvents' element ={<Myevents></Myevents>} />
    <Route path='/eventoInfo' element = {<VerEvento></VerEvento>} />
    <Route path='/comprarBoleto' element = {<ComprarBoleto></ComprarBoleto>}/>
    <Route path='/verEstadisiticas' element = {<Stadistics></Stadistics>} />
    <Route path='/moderarUsuarios' element = {<ModerarUsuarios></ModerarUsuarios>}/>
  </Routes>
  </GoogleOAuthProvider>
  </>
  );
}

export default App;
