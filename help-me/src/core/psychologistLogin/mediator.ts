import { Model } from "../../infra/interfaces/psychologistLogin";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}