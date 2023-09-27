import { Model } from "../../infra/interfaces/psychologistRegistration";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}