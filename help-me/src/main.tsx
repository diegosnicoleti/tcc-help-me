import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

// import Home from './pages/home/index.tsx';
// import ListOfPsychologists from './pages/listOfPsychologists';
// import UserRegistration from './pages/userRegistration';
// import UserLogin from './pages/userLogin';
// import PsychologistLogin from './pages/psychologistLogin';
import PsychologistRegistration from './pages/psychologistRegistration';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <ListOfPsychologists /> */}
    {/* <UserRegistration /> */}
    {/* <UserLogin /> */}
    {/* <PsychologistLogin /> */}
    <PsychologistRegistration />
  </React.StrictMode>,
)
