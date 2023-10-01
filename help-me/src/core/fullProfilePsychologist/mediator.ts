import { Model } from "../../infra/interfaces/fullProfilePsychologist";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }
}