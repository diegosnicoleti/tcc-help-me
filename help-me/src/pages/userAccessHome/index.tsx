import Model from "../../core/userAccessHome/model";
import Mediator from "../../core/userAccessHome/mediator";
import Controller from "../../core/userAccessHome/controller";

export default function UserAccessPanel(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}