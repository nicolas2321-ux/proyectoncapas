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
import { ProtectedAdmin } from './services/general/ProtectedAdmin';
import { ProtectedModerador } from './services/general/ProtectedModerador';

function App() {
  return (
  <>
  <GoogleOAuthProvider clientId="151373060419-hflbjm4m12o1odr0frs1v4ad7rvpael6.apps.googleusercontent.com">
  <Routes>

    <Route path='/' element = {<Example></Example>}/>
    <Route path='/myEvents' element ={<Myevents></Myevents>} />
    <Route path='/eventoInfo' element = {<VerEvento></VerEvento>} />
    <Route path='/comprarBoleto' element = {<ComprarBoleto></ComprarBoleto>}/>

    <Route path='/events' element = {<ProtectedAdmin component={Events}></ProtectedAdmin>} />
    <Route path='/verEventos' element = {<ProtectedAdmin component={VerEventos}></ProtectedAdmin>} />
    <Route path='/userAdmin' element = {<ProtectedAdmin component={UserAdmin}></ProtectedAdmin>} />
    <Route path='/verEstadisiticas' element = {<ProtectedAdmin component={Stadistics}></ProtectedAdmin>} />
    
    <Route path='/moderarUsuarios' element = {<ProtectedModerador component={ModerarUsuarios}></ProtectedModerador>}/>
  </Routes>
  </GoogleOAuthProvider>
  </>
  );
}

export default App;
