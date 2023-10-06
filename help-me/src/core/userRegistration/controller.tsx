import { useState } from "react";
import { ControllerProps } from "../../infra/interfaces/userRegistration";
import View from "./view";

export default function Controller({mediator}:ControllerProps){
  const [email, setEmail] = useState<string>('');
  const [password, setPassword]=useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleChangeEmail = ({target}: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value);
  const handleChangePassword = ({target}: React.ChangeEvent<HTMLInputElement>) => setPassword(target.value);
  const handleChangeConfirmPassword = ({target}: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(target.value);

  const redirectToLogin = () => window.location.href = 'user-login';

  const handleSubmit = async () => {

    if(isEmailValid(email)){
      const rawData = {
        email,
        password
      };
  
      const {status} = await mediator.postPsychologist(rawData);
  
      if(status !== 200){
        console.log('não cadastrou');
      } else {
        console.log('cadastrou');
        setTimeout(redirectToLogin, 3000);
      }
 
    } else {
      console.log('Email inválido!');
    }
  }

  const isEmailValid = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <View
      email={email}
      password={password}
      confirmPassword={confirmPassword}

      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleChangeConfirmPassword={handleChangeConfirmPassword}
      handleSubmit={handleSubmit}
    />
  )
}