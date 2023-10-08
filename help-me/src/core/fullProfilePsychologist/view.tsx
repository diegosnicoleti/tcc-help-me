import PhotoProfile from './photo.svg';
import Payment from './payment.svg';
import Duration from './duration.svg';
import Public from './public.svg';
// import test from '../../assets/photo.svg';

export default function View(){
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-lg mt-10">
          <div className='flex'>
            <div className='mr-4'>
              <img src={PhotoProfile} alt="" height={200} width={200}/>
            </div>

            <div>
              <p>Psicólogo</p>
              <h2 className="text-primary-800 font-bold text-2xl	">Fulano de Souza da Silva</h2>
              <p>CRP 00/0000000</p>

              <div className="flex mt-5">
                <div className="mr-10">
                  <div className='flex'>
                    <div className='mr-2'>
                      <img src={Payment} alt="" width={30}/>
                    </div>
                    <div>
                      <p className='text-primary-800 font-bold text-xl'>R$ 135</p>
                    </div>
                  </div>
                  <p>pagamento via pix</p>
                </div>
                <div className="mr-10">
                  <div className='flex'>
                    <div className='mr-2'>
                      <img src={Duration} alt="" width={30}/>
                    </div>
                    <div>
                      <p className='text-primary-800 font-bold text-xl'>50min</p>
                    </div>
                  </div>
                  <p>duração da consulta</p>
                </div>
                <div className="mr-10">
                  <div className='flex'>
                    <div className='mr-2'>
                      <img src={Public} alt="" width={30}/>
                    </div>
                    <div>
                      <p className='text-primary-800 font-bold text-xl'>atendo</p>
                    </div>
                  </div>
                  <p>crianças e adolescentes</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="mr-10">
                  <p>Conversar no Whats</p>
                </div>
                <div className="mr-10">
                  <p>(17) 99999-0000</p>
                </div>
                <div className="mr-10">
                  <p>email@email.com.br</p>
                </div>
              </div>

              <p className="mt-5">
                Terapia Cognitivo Comportamental, Terapia do Esquema, Mindfulness, Psicanálise | Freud
              </p>

              <p className="mt-5 font-bold">SOBRE MIM</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, 
                ultrices mauris. Maecenas vitae mattis tellus. 
              </p>

              <p className="mt-5 font-bold">FORMAÇÃO ACADÊMICA</p>
              <div className="ml-6">
                <p className="font-bold">Graduação - Psicologia</p>
                <p>UNIVERSIDADE ABC</p>
                <p>Período: (2010 - 2015)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-40'>
        <div className="mx-auto max-w-screen-lg px-3 mt-10">
          <p className='text-primary-800 font-bold text-xl'>Avaliações</p>
          <p>Feedbacks dos pacientes que já passaram com esse psicólogo</p>

          <div className='mt-10 flex'>
            <div className='bg-white shadow-md p-8 rounded-3xl mr-10 h-full'>
              <div className='flex'>
                <div className='mr-3'>nota</div>
                <div>
                  <p className='text-gray-800 font-bold'>
                    Eu amei a consulta com a Luana. 
                    Foi minha segunda experiência com psicóloga e a agora eu me senti muito acolhida. 
                    Muito certeira nas coisas que me falou.
                  </p>
                </div>
              </div>

              <div className='mt-5 text-primary-800 font-bold text-sm'>
                <p>Atenção</p>
                <p>Comunicação</p>
                <p>Pontualidade</p>
              </div>
              
              <div className='mt-10'>
                <p className='text-gray-800 font-bold'>Paciente da Silva</p>
                <p className='text-gray-50 font-bold'>12/12/2012 - 12:00</p>
              </div>
            </div>

            <div className='bg-white shadow-md p-8 rounded-3xl mr-10 h-full'>
              <div className='flex'>
                <div className='mr-3'>nota</div>
                <div>
                  <p className='text-gray-800 font-bold'>
                    Eu amei a consulta com a Luana. 
                    Foi minha segunda experiência com psicóloga e a agora eu me senti muito acolhida. 
                    Muito certeira nas coisas que me falou.
                  </p>
                </div>
              </div>

              <div className='mt-5 text-primary-800 font-bold text-sm'>
                <p>Atenção</p>
                <p>Comunicação</p>
                <p>Pontualidade</p>
              </div>
              
              <div className='mt-10'>
                <p className='text-gray-800 font-bold'>Paciente da Silva</p>
                <p className='text-gray-50 font-bold'>12/12/2012 - 12:00</p>
              </div>
            </div>

            <div className='bg-white shadow-md p-8 rounded-3xl mr-10 h-full'>
              <div className='flex'>
                <div className='mr-3'>nota</div>
                <div>
                  <p className='text-gray-800 font-bold'>
                    Eu amei a consulta com a Luana. 
                    Foi minha segunda experiência com psicóloga e a agora eu me senti muito acolhida. 
                    Muito certeira nas coisas que me falou.
                  </p>
                </div>
              </div>

              <div className='mt-5 text-primary-800 font-bold text-sm'>
                <p>Atenção</p>
                <p>Comunicação</p>
                <p>Pontualidade</p>
              </div>
              
              <div className='mt-10'>
                <p className='text-gray-800 font-bold'>Paciente da Silva</p>
                <p className='text-gray-50 font-bold'>12/12/2012 - 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}