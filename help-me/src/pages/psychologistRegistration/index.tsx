import Model from "../../core/psychologistRegistration/model";
import Mediator from "../../core/psychologistRegistration/mediator";
import Controller from "../../core/psychologistRegistration/controller";

export default function Home(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}