import Payment from './payment.svg';
import Duration from './duration.svg';
import Public from './public.svg';
import { ViewProps } from '../../infra/interfaces/fullProfilePsychologist';
import { Base64ToImage } from '../../components/Base64ToImage';
// import test from '../../assets/photo.svg';

export default function View(props:ViewProps){
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-lg mt-10">
          <div className='flex'>
            <div className='mr-4'>
              <Base64ToImage base64String={props.base64String}/>
            </div>

            <div>
              <p>Psicólogo</p>
              <h2 className="text-primary-800 font-bold text-2xl">{props.fullName}</h2>
              <p>{`CRP: ${props.CRPNumber}`}</p>

              <div className="flex mt-5">
                <div className="mr-10">
                  <div className='flex'>
                    <div className='mr-2'>
                      <img src={Payment} alt="" width={30}/>
                    </div>
                    <div>
                      <p className='text-primary-800 font-bold text-xl'>{`R$ ${props.consultationFee}`}</p>
                    </div>
                  </div>
                  <p>{`pagamento ${props.paymentType}`}</p>
                </div>
                <div className="mr-10">
                  <div className='flex'>
                    <div className='mr-2'>
                      <img src={Duration} alt="" width={30}/>
                    </div>
                    <div>
                      <p className='text-primary-800 font-bold text-xl'>{`${props.consultationDuration}min`}</p>
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
                  <p>{props.clientType}</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="mr-10">
                  <div>
                    <a href={`https://wa.me/55${props.contactLink}`} target="_blank" rel="noopener noreferrer"
                      className="bg-success-50 text-success-800 font-semibold py-2 px-4 rounded-full border-success-800 border-2
                      hover:bg-success-800 hover:text-white
                      transition ease-in-out duration-300"
                    >
                      Conversar no WhatsApp
                    </a>
                  </div>
                </div>
                <div className="mr-10">
                  <p>email@email.com.br</p>
                </div>
              </div>

              <p className="mt-5">
                {`Possui especialidade em ${props.specialtyType}`}
              </p>

              <p className="mt-5 font-bold">SOBRE MIM</p>
              <p>
                {props.biographySummary}
              </p>
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
                <div className='mr-3'>{props.feedbackScore}</div>
                <div>
                  <p className='text-gray-800 font-bold italic'>
                    {props.feedbackComment}
                  </p>
                </div>
              </div>

              <div className='mt-10'>
                <p className='text-gray-800 font-bold'>Paciente da Silva</p>
                <p className='text-gray-50 font-bold'>12/12/2012 - 12:00</p>
              </div>
            </div>

            {/* <div className='bg-white shadow-md p-8 rounded-3xl mr-10 h-full'>
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
              
              <div className='mt-10'>
                <p className='text-gray-800 font-bold'>Paciente da Silva</p>
                <p className='text-gray-50 font-bold'>12/12/2012 - 12:00</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}