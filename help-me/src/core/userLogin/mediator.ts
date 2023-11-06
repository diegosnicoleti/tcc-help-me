import { Model } from "../../infra/interfaces/userLogin";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }

  async postVerifyUser(rawData:{email:string, password:string}){
    try{

      const requestBody = {
        "email": rawData.email,
        "password": rawData.password
      };

      const status = await this.model.postVerifyUser(requestBody);
      
      return {status}

    }catch(error){
      console.log(error);
      return {
        status: 400
      };
    }
  }
}