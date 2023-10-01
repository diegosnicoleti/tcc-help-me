import Model from "../../core/fullProfilePsychologist/model";
import Mediator from "../../core/fullProfilePsychologist/mediator";
import Controller from "../../core/fullProfilePsychologist/controller";

export default function FullProfilePsychologist(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}