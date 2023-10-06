import { Model } from "../../infra/interfaces/userRegistration";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }

  async postPsychologist(rawData:{email:string, password:string}){
    try {

      const requestBody = {
        "email": rawData.email,
        "password": rawData.password
      };

      const status = await this.model.postPsychologist(requestBody);
      
      return {status}

    }catch(error){
      console.log(error);
      return {
        status: 400
      };
    }
  }
}