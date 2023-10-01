import Model from "../../core/psychologistLogin/model";
import Mediator from "../../core/psychologistLogin/mediator";
import Controller from "../../core/psychologistLogin/controller";

export default function PsychologistLogin(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}