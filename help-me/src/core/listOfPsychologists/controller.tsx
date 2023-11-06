import { useEffect, useCallback, useState } from "react";
import { ControllerProps, PsychologistData } from "../../infra/interfaces/listOfPsychologists";
import View from "./view";

export default function Controller({mediator}:ControllerProps){
  
  const [statesList, setStatesList] = useState<string[]>([]);
  const [citiesList, setCitiesList] = useState<string[]>([]);
  const [specialtyList, setSpecialtyList] = useState<string[]>([]);
  const [psychologistsList, setPsychologistsList] = useState<PsychologistData[]>([]);

  const [stateFilter, setStateFilter] = useState<string>('');
  // const [cityFilter, setCityFilter] = useState<string>('');
  // const [specialtyFilter, setSpecialtyFilter] = useState<string>('');

  const queryPsicoRedirect = (psicoCode:number) => window.location.href = `/full-profile-psychologist?type=${psicoCode}`

  const handleChangeUF = (newUF:string) => {
    setStateFilter(newUF);

    const cityFound = psychologistsList.filter((item:any) => item.uf === newUF);
    const newCityFound = cityFound.map((item:any) => item.cidade);
    setCitiesList(newCityFound);
  }

  const getPsychologists = useCallback(async () => {
    const {data} = await mediator.getPsychologists();
    
    console.log(data)

    const states = data.map((item:any) => item.uf);
    const newStates = [...new Set(states)];

    const specialty = data.map((item:any) => item.especialidade);

    setStatesList(newStates);
    setSpecialtyList(specialty);
    setPsychologistsList(data);
  },[mediator])
  
  useEffect(() => {
    getPsychologists()
  }, [])

  return (
    <View
      statesList={statesList}
      citiesList={citiesList}

      specialtyList={specialtyList}
      psychologistsList={psychologistsList}

      stateFilter={stateFilter}
      
      handleChangeUF={handleChangeUF}

      queryPsicoRedirect={queryPsicoRedirect}
    />
  )
}