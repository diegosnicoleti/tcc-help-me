import { ControllerProps } from "../../infra/interfaces/userLogin";
import View from "./view";

export default function Controller({mediator}:ControllerProps){
  
  const handleLogin = async() => {

    const rawData = {
      email: "diego",
      password: "abc"
    };

    console.log(rawData)

    const {status} = await mediator.postVerifyUser(rawData);
  }

  return (
    <View
      handleLogin={handleLogin}
    />
  )
}