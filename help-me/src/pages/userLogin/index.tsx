import Model from "../../core/userLogin/model";
import Mediator from "../../core/userLogin/mediator";
import Controller from "../../core/userLogin/controller";

export default function UserLogin(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}