export default class Model{
  public async getPsychologistsById(id_psico:number) {
    try {
      const response = await fetch(`http://localhost:4000/selectById/${id_psico}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  }
}