export default class Model {
  public async postPsychologist(data:any) {
    try {
      const response = await fetch('http://localhost:4000/new-psychologists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar dados para a API');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Erro ao enviar dados para a API:', error);
      throw error;
    }
  }
}