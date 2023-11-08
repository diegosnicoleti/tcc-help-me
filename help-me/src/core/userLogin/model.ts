export default class Model {
  public async postVerifyUser(data:{email:string, password:string}){
    try{
      const response = await fetch('http://localhost:4000/verifyUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      console.log('response: ', response)

      if (!response.ok) {
        throw new Error('Erro ao enviar dados para a API');
      }
  
    }catch(error){
      console.error('Erro ao enviar dados para a API:', error);
      throw error;
    }
  }
}