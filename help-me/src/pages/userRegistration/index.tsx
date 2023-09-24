import Model from "../../core/userRegistration/model";
import Mediator from "../../core/userRegistration/mediator";
import Controller from "../../core/userRegistration/controller";

export default function Home(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}