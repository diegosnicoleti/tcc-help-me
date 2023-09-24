import Photo from './photo.svg';

const psychologistData = [
  {
    name: 'Fulano da Silva',
    crp: '12/235657',
    biography: 'Experiência clínica e de pesquisa, apresentando trabalhos em congressos de psicologia e neurologia, demonstrando dados, atuando em associação filantrópica voltada para o atendimento de pessoas com doenças crônicas',
    serviceValue: 130,
    durationOfService: 50,
    note: 0,
    profilePicture: ''
  },
  {
    name: 'Abc Souza',
    crp: '12/235657',
    biography: 'Experiência clínica e de pesquisa, apresentando trabalhos em congressos de psicologia e neurologia, demonstrando dados, atuando em associação filantrópica voltada para o atendimento de pessoas com doenças crônicas',
    serviceValue: 100,
    durationOfService: 40,
    note: 0,
    profilePicture: ''
  },
  {
    name: 'Abc Marques',
    crp: '12/235657',
    biography: 'Experiência clínica e de pesquisa, apresentando trabalhos em congressos de psicologia e neurologia, demonstrando dados, atuando em associação filantrópica voltada para o atendimento de pessoas com doenças crônicas',
    serviceValue: 120,
    durationOfService: 60,
    note: 0,
    profilePicture: ''
  }
];

export default function View(){
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-lg px-3">
          <p className="mt-10 text-gray-800 font-bold text-base">
            Encontre seu psicólogo
          </p>

          <div className="flex mt-5">
            <div className="flex mr-8">
              <p className="text-gray-700 font-bold mr-2">UF:</p>
              <select id="countries" className="bg-white h-30 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="flex mr-8">
              <p className="text-gray-700 font-bold mr-2">Cidade:</p>
                <select id="countries" className="bg-white h-30 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
            </div>

            <div className="flex mr-8">
              <p className="text-gray-700 font-bold mr-2">Especialidade/transtorno:</p>
                <select id="countries" className="bg-white h-30 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <div className="flex">
              <div>
                <p className="text-gray-700 font-bold mr-2">Valor da consulta:</p>            
              </div>
              <div>
                <input id="minmax-range" type="range" min="0" max="10" value="8" className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"/>
              </div>
              <div className="ml-4">
                <button className='text-sm bg-primary-700 hover:bg-primary-800 text-black font-bold	py-2 px-4 rounded-lg'>
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {psychologistData.map((item:any) => {
            return (
              <div className="bg-primary-50 mb-10 mt-5 rounded-3xl shadow-md py-4">
                <div className="flex ml-4">
                  <div>
                    <img src={Photo} alt="" />
                    <p className='text-center text-gray-800 font-bold'>R$ {item.serviceValue}</p>
                    <p className='text-center text-gray-800 font-bold text-xs'>{item.durationOfService} min</p>
                  </div>
                  <div className='ml-3'>
                    <p className="text-primary-500 font-bold text-base">{item.name}</p>
                    <p className="text-gray-800 font-bold text-sm">CRP: {item.crp}</p>
                    <p className="mt-5 text-gray-800 font-bold text-sm">Sobre mim:</p>
                    <p className="text-gray-800 font-bold text-sm">
                      {item.biography}
                    </p>
                    <p className="mt-2 text-blue-600 font-bold text-sm">
                      Ver perfil completo
                    </p>
                  </div>
                  <div>
                    <button className='text-base bg-primary-700 hover:bg-primary-800 text-black font-bold	py-4 px-4 rounded-lg w-48'>
                      Agendar
                    </button>
                  </div>
                </div>            
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}