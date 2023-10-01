import Model from "../../core/psychologistAccessHome/model";
import Mediator from "../../core/psychologistAccessHome/mediator";
import Controller from "../../core/psychologistAccessHome/controller";

export default function PsychologistAccessPanel(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}