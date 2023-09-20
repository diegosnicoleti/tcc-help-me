import { Model } from "../../infra/interfaces/home";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}