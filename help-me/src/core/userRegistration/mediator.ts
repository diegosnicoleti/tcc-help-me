import { Model } from "../../infra/interfaces/userRegistration";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}