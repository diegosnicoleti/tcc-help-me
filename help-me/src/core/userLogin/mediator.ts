import { Model } from "../../infra/interfaces/userLogin";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}