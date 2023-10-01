import { Model } from "../../infra/interfaces/psychologistAccessHome";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}