import { useState } from "react";
import { ControllerProps } from "../../infra/interfaces/userLogin";
import View from "./view";

export default function Controller({mediator}:ControllerProps){
  
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const handleChangeEmailField = ({target}: React.ChangeEvent<HTMLInputElement>) => setEmailField(target.value);
  const handleChangePasswordField = ({target}: React.ChangeEvent<HTMLInputElement>) => setPasswordField(target.value);

  const redirectToUserPanel = () => window.location.href = "user-access-panel";

  const handleLogin = async() => {
    const rawData = {
      email: emailField.trim().toLocaleLowerCase(),
      password: passwordField
    };

    const {status} = await mediator.postVerifyUser(rawData);

    if(status !== 200){
      //alert bonitão
      console.log('erro')
    } else {
      redirectToUserPanel();
    }
  };

  return (
    <View
      emailField={emailField}
      passwordField={passwordField}
      
      handleChangeEmailField={handleChangeEmailField}
      handleChangePasswordField={handleChangePasswordField}
      handleLogin={handleLogin}
    />
  )
}