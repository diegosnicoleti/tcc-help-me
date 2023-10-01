import Profile from './profile.svg';
import Patients from './patients.svg';
import Comments from './comments.svg';
export default function View(){
  return (
    <>
      <div className="mt-24 ml-10 mr-10">
        <div className="shadow-lg p-6">
          <p className="text-xl text-gray-1000 font-bold">Bem vindo(a) ao seu portal, Help Me!</p>
          <p className="mt-5 ml-10">Aqui você tem acesso:</p>
          <div className="flex mt-3 ml-10">
            <img src={Profile} alt="" width="25" className='mr-5'/>
            <p>seu perfil: podendo mudar sua biografia para seus futuros pacientes saberem mais sobre você</p>
          </div>
          <div className='flex mt-3 ml-10'>
            <img src={Patients} alt="" width="25" className='mr-5'/>
            <p>consultas: visualizar a lista de consultas agendadas pelos seus pacientes</p>
          </div>
          <div className='flex mt-3 ml-10'>
            <img src={Comments} alt="" width="25" className='mr-5'/>
            <p>comentarios: ficar por dentro do que os seus pacientes acharam da sua consulta</p>
          </div>
        </div>
      </div>

      <div className="mt-8 ml-10">
        <div className="flex">
          <div className="shadow-lg p-6 mr-10">
            <p className="text-lg text-gray-1000 font-bold mb-4">Próximas consultas</p>
            <div className="flex">
              <p className="mr-3 text-primary-800 font-bold">00/00/000</p>
              <p>Nome do Arrombado Arrombado</p>
            </div>
            <div className="flex">
              <p className="mr-3 text-primary-800 font-bold">00/00/000</p>
              <p>Nome do Arrombado Arrombado</p>
            </div>
            <div className="flex">
              <p className="mr-3 text-primary-800 font-bold">00/00/000</p>
              <p>Nome do Arrombado Arrombado</p>
            </div>
            <p className="flex justify-end text-sm mt-5 hover:cursor-pointer underline underline-offset-1">Ver todas</p>
          </div>

          <div className="shadow-lg p-6 mr-10">
            <p className="text-lg text-gray-1000 font-bold mb-4 text-center">Você fez</p>
            <p className="text-center text-primary-800 font-bold text-5xl">10</p>
            <p>atendimentos</p>
            <p className="flex justify-end text-sm mt-5 hover:cursor-pointer underline underline-offset-1">Ver todos</p>
          </div>

          <div className="shadow-lg p-6 mr-10">
            <p className="text-lg text-gray-1000 font-bold mb-4">Últimos comentários</p>
            <p className="text-primary-800 font-bold">Marcos</p>
            <p>"Adfjdklfjdklfjldkjfldkjfkdlfjdl fadfsf"</p>

            <p className="text-primary-800 font-bold">Marcos</p>
            <p>"Adfjdklfjdklfjldkjfldkjfkdlfjdl fadfsf"</p>
            <p className="flex justify-end text-sm mt-5 hover:cursor-pointer underline underline-offset-1">Ver todos</p>
          </div>

          <div className="shadow-lg p-6">
            <p className="text-lg text-gray-1000 font-bold mb-4">O que precisa melhorar?</p>
            <p className="text-sm">Segundo seus pacientes, esses são detalhes que precisam melhorar</p>
            <div className="mt-10 flex justify-between text-primary-800 font-bold">
              <p>Atenção</p>
              <p>Comunição</p>
              <p>Pontualidade</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}