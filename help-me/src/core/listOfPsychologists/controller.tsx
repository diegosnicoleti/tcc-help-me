import { useEffect, useCallback } from "react";
import { ControllerProps } from "../../infra/interfaces/listOfPsychologists";
import View from "./view";

export default function Controller({mediator}:ControllerProps){
  
  const getPsychologists = useCallback(async () => {
    const {data} = await mediator.getPsychologists();
  },[])
  
  useEffect(() => {
    getPsychologists()
  }, [])

  return (
    <View
    />
  )
}