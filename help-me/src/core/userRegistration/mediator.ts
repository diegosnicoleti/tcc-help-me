import { Model } from "../../infra/interfaces/userRegistration";

export default class Mediator {
  model: Model;

  constructor(model:Model){
    this.model = model;
  }

//   {
//     "email": "dddddd",
//     "password": "123"
// }

  async postPsychologist(data:any){
    try {

      const requestBody = {
        "email": data.email,
        "password": data.password
      }

      const {status} = await this.model.postPsychologist(requestBody)

      return {status}

    }catch(error){
      console.log(error)
      return {
        status: 400
      }
    }
  }
}