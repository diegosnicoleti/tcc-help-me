import { Model } from "../../infra/interfaces/userAccessHome";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }

  async getPsychologists() {
    try {
      const data = await this.model.getPsychologists();
      return {data:data};
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  }

  async postPsychologistComment(rawData:{id_user:number, id_psico:number, comment:string}) {
    try{

      const requestBody = {
        "id_user": rawData.id_user,
        "id_psico": rawData.id_psico,
        "comment": rawData.comment
      };

      const status = await this.model.postPsychologistComment(requestBody);
      
      return {status}

    }catch(error){
      console.log(error);
      return {
        status: 400
      };
    }
  }
}