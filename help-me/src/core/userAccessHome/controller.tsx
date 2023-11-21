import { ControllerProps } from "../../infra/interfaces/userAccessHome";
import View from "./view";
import { useState, useEffect, useCallback } from "react";
export default function Controller({mediator}:ControllerProps){
  const [psychologistNameSearchField, setPsychologistNameSearchField] = useState<string>('');
  const [psychologistsList, setPsychologistsList] = useState<any[]>([]);
  const [foundPsychologistsList, setFoundPsychologistsList] = useState<any[]>([]);
  const [showRatingModal, setShowRatingModal] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const [idPsychologistSelected, setIdPsychologistSelected] = useState<number>(0);

  const handleChangePsychologistName = ({target}: React.ChangeEvent<HTMLInputElement>) => setPsychologistNameSearchField(target.value);
  const handleChangeComment = ({target}: React.ChangeEvent<HTMLInputElement>) => setComment(target.value);

  const searchPsychologist = () => {
    const foundPsychologists = psychologistsList.filter((item:any) => {
      return item.nome_completo.toLowerCase().includes(psychologistNameSearchField.toLowerCase())
    });
    
    setFoundPsychologistsList(foundPsychologists);
  };

  const getPsychologists = useCallback(async () => {
    const {data} = await mediator.getPsychologists();
    setPsychologistsList(data);
  },[mediator]);
  
  const openRatingModal = (idPsycho:number) => {
    setShowRatingModal(!showRatingModal)
    setIdPsychologistSelected(idPsycho);
  };

  const closeRatingModal = () => setShowRatingModal(false);

  const handleConfirmComment = () => {
    const rawData = {
      id_user: 1,
      id_psico: idPsychologistSelected,
      comment: comment
    };

  };

  useEffect(() => {
    getPsychologists();
  }, []);

  return (
    <View
      psychologistNameSearchField={psychologistNameSearchField}
      psychologistsList={psychologistsList}
      foundPsychologistsList={foundPsychologistsList}
      showRatingModal={showRatingModal}
      comment={comment}

      handleChangePsychologistName={handleChangePsychologistName}
      handleChangeComment={handleChangeComment}
      searchPsychologist={searchPsychologist}
      openRatingModal={openRatingModal}
      closeRatingModal={closeRatingModal}
      handleConfirmComment={handleConfirmComment}
    />
  )
}