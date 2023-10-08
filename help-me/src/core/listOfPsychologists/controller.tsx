import { useEffect, useCallback, useState } from "react";
import { ControllerProps, PsychologistData } from "../../infra/interfaces/listOfPsychologists";
import View from "./view";

export default function Controller({mediator}:ControllerProps){
  
  const [statesList, setStatesList] = useState<string[]>([]);
  // const [citiesList, setCitiesList] = useState<any[]>([]);
  const [specialtyList, setSpecialtyList] = useState<string[]>([]);
  const [psychologistsList, setPsychologistsList] = useState<PsychologistData[]>([]);

  const getPsychologists = useCallback(async () => {
    const {data} = await mediator.getPsychologists();
    
    const states = data.map((item:any) => item.uf);
    
    const specialty = data.map((item:any) => item.especialidade);

    setStatesList(states);
    setSpecialtyList(specialty);
    setPsychologistsList(data);
  },[mediator])
  
  useEffect(() => {
    getPsychologists()
  }, [])

  return (
    <View
      statesList={statesList}
      
      specialtyList={specialtyList}
      psychologistsList={psychologistsList}
    />
  )
}