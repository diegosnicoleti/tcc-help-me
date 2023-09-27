import MentalHealth from './Mental health.svg';
import Friends from './friends.svg';
import Psicologa from './psicologa.svg';

import Anxiety from './anxiety.svg';
import ChronicPain from './chronicPain.svg';
import Discrimination from './discrimination.svg';
import Stress from './stress.svg';

import CommonQuestions from './commonQuestions.svg';
import QuotationMarks from './quotationMarks.svg';

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
];

const reviewsAboutPsychologists = [
  {
    comment: 'Eu amei a consulta com a Luana Foi minha segunda experiência com psicóloga e a agora eu me senti muito acolhida. Muito certeira nas coisas que me falou.',
    noteToPsychologist: 4,
    name: 'Fulano da Silva',
    psychologistName: 'Luciana Sobrenome',
    dateAndTime: '12/12/2012 - 12:00'
  },
  {
    comment: 'Eu amei a consulta com a Luana Foi minha segunda experiência com psicóloga e a agora eu me senti muito acolhida. Muito certeira nas coisas que me falou.',
    noteToPsychologist: 5,
    name: 'Fulano da Silva',
    psychologistName: 'Luciana Sobrenome',
    dateAndTime: '12/12/2012 - 12:00'
  },
  {
    comment: 'Eu amei a consulta com a Luana Foi minha segunda experiência com psicóloga e a agora eu me senti muito acolhida. Muito certeira nas coisas que me falou.',
    noteToPsychologist: 4,
    name: 'Fulano da Silva',
    psychologistName: 'Luciana Sobrenome',
    dateAndTime: '12/12/2012 - 12:00'
  }
];

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
                <a href="list-of-psychologists">
                  <button className='text-sm mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold	py-2 px-4 rounded-lg'>
                    Conheça os psicólogos
                  </button>
                </a>
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

          <div className='flex mt-10'>
            <div className='bg-white py-4 px-3 rounded-2xl text-center h-full'>
              <p>Mas o que é ansiedade patológica afinal?</p>
              <p>
                A ansiedade patológica segundo a psiquiatra Dra Luciana Mendes 
                se deve pelas preocupações excessivas, irritabilidade e 
                pertubações do sono, por exemplo.
              </p>
              <p>
                Os principais motivos que levam a essa ansiedade constumam ser:
                Preocupações de saúde, financeiras e relacionamentos.
              </p>
            </div>
            <div className='bg-white py-4 px-3 rounded-2xl h-full mt-40'>
              <p className='italic text-center'>
                "Quando não tratada corretamente, a ansiedade pode virar uma 
                adversidade e desencadear outros transtornos mentais, 
                como a depressão, que acomete aproximadamente 
                300 milhões de pessoas no mundo, segundo a 
                Organização Pan-Americana da Saúde (Opas)."
              </p>
              <p className='text-right'>
                g1.globo.com
              </p>
            </div>
          </div>

          <div className='flex mt-10'>
            <div className='bg-white py-4 px-3 rounded-2xl text-center h-full font-semibold'>
              <p>
                Crianças e jovens são mais vulneráveis a ter o diagnóstico 
                de transtorno de ansiedade.
              </p>
            </div>
            <div className='bg-white py-4 px-3 rounded-2xl mt-40'>
              <p className='text-center'>
                "A ansiedade é mais comum na infância e adolescência, 
                porque a pessoa ainda não conhece o mundo. 
                É uma fase que o ser humano ainda está em desenvolvimento 
                e a criança está extremamente vulnerável ao que acontece."
              </p>
              <p className='text-right'>
                Gerardo Maria de Araújo Filho, professor da Famerp.
              </p>
            </div>
          </div>

          <div className='text-start'>
            <button className='text-sm mt-4 bg-primary-700 hover:bg-primary-800 text-black font-bold	py-2 px-4 rounded-lg'>
              Saiba mais
            </button>
          </div> 
        </div>
      </section>

      <section className='bg-CommonQuestions-100'>
        <div className='mx-auto max-w-screen-lg px-4'>
          <p className='text-center text-3xl font-bold text-gray-800'>
            Perguntas frequentes
          </p>
          <div className='flex mt-20'>
            <div>
              <img src={CommonQuestions} alt="" width={500}/>
            </div>
            <div>
              array de perguntas + botao p/ adicionar uma pergunta
            </div>
          </div>
        </div>
      </section>

      <section className='bg-FeedBacks-100'>
        <div className='mx-auto max-w-screen-lg px-4'>
          <div>
            <p className='text-center text-3xl font-bold text-gray-800'>
              O que as pessoas têm a dizer sobre os atendimentos?
            </p>
            <p className='text-center font-bold text-gray-800 mt-5'>
              Confira os últimos comentários dos nossos usuários sobre os psicólogos do Help Me
            </p>
          </div>
          
          <div className='flex mt-5'>
            {reviewsAboutPsychologists.map((item:{comment:string, noteToPsychologist:number, name:string, psychologistName:string, dateAndTime:string}) => {
              return (
                <div className='bg-white shadow-md py-4 px-4 h-full rounded-3xl text-left font-bold text-gray-800 text-sm mr-5'>
                  <img src={QuotationMarks} alt="" />
                  {item.comment}
                  <p>{item.name}</p>
                  <p>Paciente da 
                    <span className='text-primary-800'>
                      {" " + item.psychologistName}
                    </span>
                  </p>
                  <p className='text-gray-50'>{item.dateAndTime}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}