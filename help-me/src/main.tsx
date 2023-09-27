import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Home from './pages/home/index.tsx';
import ListOfPsychologists from './pages/listOfPsychologists';
import UserRegistration from './pages/userRegistration';
import UserLogin from './pages/userLogin';
import PsychologistLogin from './pages/psychologistLogin';
import PsychologistRegistration from './pages/psychologistRegistration';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'list-of-psychologists',
    element: <ListOfPsychologists />
  },
  {
    path: 'user-registration',
    element: <UserRegistration />
  },
  {
    path: 'user-login',
    element: <UserLogin />
  },
  {
    path: 'psychologist-login',
    element: <PsychologistLogin />
  },
  {
    path: 'psychologist-registration',
    element: <PsychologistRegistration />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)