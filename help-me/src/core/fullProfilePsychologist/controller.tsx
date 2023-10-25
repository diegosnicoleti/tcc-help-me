import { useCallback, useEffect } from "react";
import { ControllerProps } from "../../infra/interfaces/fullProfilePsychologist";
import View from "./view";
// import { useLocation } from 'react-router-dom';

export default function Controller({mediator}:ControllerProps){
  
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const idPsicoParamsURL = (queryParams.get('type'));

  const getPsychologistsById = useCallback(async() => {
    const id_psico = 1
    const {data} = await mediator.getPsychologistsById(id_psico)
  },[mediator])

  useEffect(() => {
    getPsychologistsById()
  },[])

  return (
    <View/>
  )
}