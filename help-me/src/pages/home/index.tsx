import Model from "../../core/home/model";
import Mediator from "../../core/home/mediator";
import Controller from "../../core/home/controller";

export default function Home(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}