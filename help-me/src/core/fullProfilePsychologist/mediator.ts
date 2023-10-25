import { Model } from "../../infra/interfaces/fullProfilePsychologist";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }

  async getPsychologistsById(id_psico:number) {
    try {
      const data = await this.model.getPsychologistsById(id_psico);
      console.log(data)
      return {data:data};
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  }
}