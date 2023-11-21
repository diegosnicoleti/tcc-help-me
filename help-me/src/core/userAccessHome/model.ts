export default class Model{
  public async getPsychologists() {
    try {
      const response = await fetch('http://localhost:4000/psychologists');

      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  }

  public async postPsychologistComment(data:{id_user:number, id_psico:number, comment:string}){
    try{
      const response = await fetch('http://localhost:4000/PsychologistComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar dados para a API');
      }

      const result = await response.json();
      return result.status;
    }catch(error){
      console.error('Erro ao enviar dados para a API:', error);
      throw error;
    }
  }
}