export default class Model {

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
}