import MentalHealth from './Mental health.svg';
import Friends from './friends.svg';
import Psicologa from './psicologa.svg';

export default function View(){
  return (
    <div>
      <section className="bg-red-100">
        <div className="flex justify-center items-center">
          <div className='text-center'>
            <h1 className='text-4xl font-sans font-bold'>
              Você está cuidando da sua saúde mental?
            </h1>
            <div className='italic text-xl mt-10'>
              <p className='pb-3'>Falta de concentração?</p>
              <p className='pb-3'>Estressado frequentemente?</p>
              <p className='pb-3'>Dificuldades ao dormir?</p>
            </div>

            <p className='font-semibold text-xl mt-4'>
              Esses são alguns dos sinais que especialistas alertam!
            </p>

            <button className='mt-10 bg-red-300 hover:bg-red-400 text-black font-bold	py-2 px-4 rounded-lg'>
              Consulte um profissional
            </button>
          </div>

          <div>
            <img src={MentalHealth} alt="" height={600} width={600}/>
          </div>
        </div>
      </section>

      <section>
        <p className='italic text-center mt-14 text-xl mx-auto max-w-screen-xl p-4'>
          "É preciso observar de que maneira são mantidos os vínculos de trabalho, de amizade,  
          de relacionamento e o quanto esses vínculos são saudáveis."
        </p>
        <p className='text-right'>
          Maycon Rodrigo Torres, Psicólogo do Laboratório de Psicanálise e Laço Social da Universidade Federal Fluminense (UFF)
        </p>

        <div className='flex justify-center mt-20'>
          <img src={Friends} alt="" width={600}/>
        </div>
      </section>

      <section className="bg-cyan-100">
        <div className='flex text-xl mx-auto max-w-screen-xl p-10 items-center'>
          <div className='mt-10'>
            <img src={Psicologa} alt="" width={900}/>
          </div>
          <div>
            <p className='text-3xl font-bold'>E pra quem é o Help Me?</p>
            <p className='mt-4'>
              O Help Me é para qualquer pessoa que gostaria de ter a 
              oportunidade de agendar uma consulta com um profissional 
              da área da psicologia com amplo conhecimento, sendo possível visualizar 
              sua biografia e selecionar o que mais te agradar.
            </p>
            <button className='mt-4'>
              Conheça os psicólogos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}