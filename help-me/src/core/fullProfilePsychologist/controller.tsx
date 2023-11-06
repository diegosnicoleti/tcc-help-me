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
  const [consultationFee, setConsultationFee] = useState<number>(0);
  const [consultationDuration, setConsultationDuration] = useState<number>(0);
  const [clientType, setClientType] = useState<string>('');
  const [CRPNumber, setCRPNumber] = useState<number>(0);
  const [paymentType, setPaymentType] = useState<string>('');
  const [base64String, setBase64String] = useState<string>('');
  const [contactLink, setContactLink] = useState<number>(0);
  const [specialtyType, setSpecialtyType] = useState<string>('');
  const [feedbackScore, setFeedbackScore] = useState<number>(0);
  const [feedbackComment, setFeedbackComment] = useState<string>('');

  const getPsychologistsById = useCallback(async () => {
    if (idPsicoParamsURL) {
      const id_psico = parseInt(idPsicoParamsURL, 10);
      const { data } = await mediator.getPsychologistsById(id_psico);
            
      setFullName(data.nome_completo);
      setBiographySummary(data.biografia_resumo);
      setConsultationFee(data.valor);
      setConsultationDuration(data.duracao);
      setClientType(data.publico);
      setCRPNumber(data.crp);
      setPaymentType(data.forma_pgto);
      setBase64String(data.foto);
      setContactLink(data.numero_whats);
      setSpecialtyType(data.especialidade);
      setFeedbackScore(data.avaliacao_psicologo);
      setFeedbackComment(data.comentario);
    }
  }, [mediator, idPsicoParamsURL]);

  useEffect(() => {
    getPsychologistsById();
  }, [getPsychologistsById]);

  return (
    <View 
      fullName={fullName}
      biographySummary={biographySummary}
      consultationFee={consultationFee}
      consultationDuration={consultationDuration}
      clientType={clientType}
      CRPNumber={CRPNumber}
      paymentType={paymentType}
      base64String={base64String}
      contactLink={contactLink}
      specialtyType={specialtyType}
      feedbackScore={feedbackScore}
      feedbackComment={feedbackComment}
    />
  );
}
