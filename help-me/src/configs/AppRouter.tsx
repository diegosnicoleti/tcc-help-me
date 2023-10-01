import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import ListOfPsychologists from '../pages/listOfPsychologists';
import UserRegistration from '../pages/userRegistration';
import UserLogin from '../pages/userLogin';
import PsychologistLogin from '../pages/psychologistLogin';
import PsychologistRegistration from '../pages/psychologistRegistration';
import FullProfilePsychologist from '../pages/fullProfilePsychologist/index.tsx';
import PsychologistAccessHome from '../pages/psychologistAccessHome/index.tsx';

import AppLayout from '../components/Layout';

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='list-of-psychologists' element={<ListOfPsychologists/>}/>
        <Route path='full-profile-psychologist' element={<FullProfilePsychologist/>}/>

        <Route path='user-registration' element={<UserRegistration/>}/>
        <Route path='user-login' element={<UserLogin/>}/>
        <Route path='psychologist-login' element={<PsychologistLogin/>}/>
        <Route path='psychologist-registration' element={<PsychologistRegistration/>}/>

        <Route element={<AppLayout><Outlet/></AppLayout>}>
          <Route path='psychologist-access-panel' element={<PsychologistAccessHome/>}/>          
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}