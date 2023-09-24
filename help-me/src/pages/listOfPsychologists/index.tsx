import Model from '../../core/listOfPsychologists/model';
import Mediator from '../../core/listOfPsychologists/mediator';
import Controller from '../../core/listOfPsychologists/controller';

export default function Home(){
  const model = new Model()
  const mediator = new Mediator(model)
  return <Controller mediator={mediator}/>
}