import { ControllerProps } from "../../infra/interfaces/fullProfilePsychologist";
import View from "./view";
import { useLocation } from 'react-router-dom';

export default function Controller({mediator}:ControllerProps){
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idPsicoParamsURL = (queryParams.get('type'));
  
  console.log(idPsicoParamsURL)

  return (
    <View/>
  )
}