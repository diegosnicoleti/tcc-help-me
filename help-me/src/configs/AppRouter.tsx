import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import LayoutApp from '../components/LayoutApp/index.tsx';
import Home from '../pages/home';
import ListOfPsychologists from '../pages/listOfPsychologists';
import UserRegistration from '../pages/userRegistration';
import UserLogin from '../pages/userLogin';
import PsychologistLogin from '../pages/psychologistLogin';
import PsychologistRegistration from '../pages/psychologistRegistration';
import FullProfilePsychologist from '../pages/fullProfilePsychologist/index.tsx';

import PsychologistAccessHome from '../pages/psychologistAccessHome/index.tsx';
import AppPsychologistLayout from '../components/LayoutPsychologist/index.tsx';

import UserAccessPanel from '../pages/userAccessHome/index.tsx';
import AppUserLayout from '../components/LayoutUser/index.tsx';

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutApp><Outlet/></LayoutApp>}>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route path='list-of-psychologists' element={<ListOfPsychologists/>}/>
        <Route path='full-profile-psychologist' element={<FullProfilePsychologist/>}/>

        <Route path='user-registration' element={<UserRegistration/>}/>
        <Route path='user-login' element={<UserLogin/>}/>
        <Route path='psychologist-login' element={<PsychologistLogin/>}/>
        <Route path='psychologist-registration' element={<PsychologistRegistration/>}/>

        <Route element={<AppUserLayout><Outlet/></AppUserLayout>}>
          <Route path='user-access-panel' element={<UserAccessPanel/>}/>
        </Route>

        <Route element={<AppPsychologistLayout><Outlet/></AppPsychologistLayout>}>
          <Route path='psychologist-access-panel' element={<PsychologistAccessHome/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}