import { Model } from "../../infra/interfaces/listOfPsychologists";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}