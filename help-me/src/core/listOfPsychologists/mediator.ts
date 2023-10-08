import { Model } from "../../infra/interfaces/listOfPsychologists";

// import Model from "./model";

export default class Mediator {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  async getPsychologists() {
    try {
      const data = await this.model.getPsychologists();
      console.log(data)
      return {data:data};
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  }
}