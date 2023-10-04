import { useState, useEffect } from "react";
import { ControllerProps } from "../../infra/interfaces/userRegistration";
import View from "./view";

export default function Controller({mediator}:ControllerProps){
  const [email, setEmail] = useState<string>('');
  const [password, setPassword]=useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleChangeEmail = ({target}: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value);
  const handleChangePassword = ({target}: React.ChangeEvent<HTMLInputElement>) => setPassword(target.value);
  const handleChangeConfirmPassword = ({target}: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(target.value);

  const handleSubmit = async () => {

    const rawData = {
      email,
      password
    }

    const {status} = await mediator.submit(rawData)

  }

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