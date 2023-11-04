import { useCallback, useEffect, useState } from "react";
import { ControllerProps } from "../../infra/interfaces/fullProfilePsychologist";
import View from "./view";
import { useLocation } from 'react-router-dom';

export default function Controller({ mediator }: ControllerProps) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idPsicoParamsURL = queryParams.get('type');

  const [fullName, setFullName] = useState<string>('');
  const [biographySummary, setBiographySummary] = useState<string>('');

  const getPsychologistsById = useCallback(async () => {
    if (idPsicoParamsURL) {
      const id_psico = parseInt(idPsicoParamsURL, 10);
      const { data } = await mediator.getPsychologistsById(id_psico);
      console.log(data)
      setFullName(data.nome_completo);
      setBiographySummary(data.biografia_resumo);
    }
  }, [mediator, idPsicoParamsURL]);

  useEffect(() => {
    getPsychologistsById();
  }, [getPsychologistsById]);

  return (
    <View 
      fullName={fullName}
      biographySummary={biographySummary}
    />
  );
}
