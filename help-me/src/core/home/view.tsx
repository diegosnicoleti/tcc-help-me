import MentalHealth from './Mental health.svg';
import Friends from './friends.svg';
import Psicologa from './psicologa.svg';

import Anxiety from './anxiety.svg';
import ChronicPain from './chronicPain.svg';
import Discrimination from './discrimination.svg';
import Stress from './stress.svg';

const subjectsPsychology = [
  {
    illustration: Anxiety,
    subjectName: 'Anxiety'
  },
  {
    illustration: ChronicPain,
    subjectName: 'ChronicPain'
  },
  {
    illustration: Discrimination,
    subjectName: 'Discrimination'
  },
  {
    illustration: Stress,
    subjectName: 'Stress'
  }
]

export default function View(){
  return (
    <div>
      <section className="bg-primary-600">
        <div className="flex justify-center items-center mx-auto max-w-screen-lg px-4">
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

            <button className='mt-10 bg-primary-700 hover:bg-red-300 text-black font-bold	py-2 px-4 rounded-lg'>
              Consulte um profissional
            </button>
          </div>

          <div>
            <img src={MentalHealth} alt="" height={600} width={600}/>
          </div>
        </div>
      </section>

      <section>
        <div className='mx-auto max-w-screen-lg px-4'>
          <p className='italic text-center mt-14 text-xl'>
            "É preciso observar de que maneira são mantidos os vínculos de trabalho, de amizade,  
            de relacionamento e o quanto esses vínculos são saudáveis."
          </p>
          <p className='text-right mt-5'>
            Maycon Rodrigo Torres, Psicólogo do Laboratório de Psicanálise e Laço Social da Universidade Federal Fluminense (UFF)
          </p>

          <div className='flex justify-center mt-20'>
            <img src={Friends} alt="" width={600}/>
          </div>
        </div>
      </section>

      <section className="bg-purple-400">
        <div className='mx-auto max-w-screen-lg px-4'>
          <div className='flex text-xl items-center'>
            <div className='mt-20'>
              <img src={Psicologa} alt="" width={1200}/>
            </div>
            <div>
              <p className='text-3xl font-bold text-gray-800'>E pra quem é o Help Me?</p>
              <p className='mt-4 text-gray-800'>
                O Help Me é para qualquer pessoa que gostaria de ter a 
                oportunidade de agendar uma consulta com um profissional 
                da área da psicologia com amplo conhecimento, sendo possível visualizar 
                sua biografia e selecionar o que mais te agradar.
              </p>
              <div className='text-end'>
                <button className='text-sm mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold	py-2 px-4 rounded-lg'>
                  Conheça os psicólogos
                </button>
              </div>            
            </div>
          </div>

          <div>
            <p className='mt-4 text-gray-800 text-xl text-center'>
              A plataforma também é para quem gosta de assustos da área Psicológica, 
              onde na aba “Curiosidades” apresenta diversos conteúdos sobre o tema.
            </p>
          </div>
          
          <div className='mt-14 flex justify-around items-end'>            
            {subjectsPsychology.map((item:{illustration:any, subjectName:string}) => {
              return (
              <div>
                <img src={item.illustration} alt="" />
                <p className='mt-5 mb-14 text-center text-purple-800'>{item.subjectName}</p>
              </div>
              )
            })}            
          </div>
        </div>
      </section>

      <section className='bg-gray-100'>
        <div className='mx-auto max-w-screen-lg px-4'>
          <p className='text-center text-3xl font-bold text-gray-800'>Mitos e Verdades</p>
          <p className='mt-10 text-center text-gray-800'>
            Segundo a Universidade Federal de Minas Gerais <strong>(UFMG)</strong> há alguns mitos e verdades quando o assunto é Saúde Mental
          </p>
          <p className='mt-2 text-center text-gray-800'>
            A seguir, será exibido algumas frases sobre o tema. Selecione se você acha que é <strong>Mito</strong> ou <strong>Verdade</strong>
          </p>
        </div>
      </section>

      <section className='bg-primary-100'>
        <div className='mx-auto max-w-screen-lg px-4'>
          <p className='text-center text-3xl font-bold text-gray-800'>
            Brasil é o país com mais ansiosos no mundo
          </p>
          <div>
            <p className='mt-10 text-center text-gray-800'>
              Aproximadamente 9,3% dos brasileiros sofrem de ansiedade patológica, segundo OMS
            </p>
            <p className='text-center text-gray-800'>Organização Mundial da Saúde</p>
          </div>
        </div>
      </section>
    </div>
  )
}