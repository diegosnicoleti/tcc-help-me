import BackgroundImage from './login-bg.jpg';

export default function View(){
  return (
    <div className="bg-no-repeat bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-white rounded-lg'>
          <div className='ml-16 mr-16 mt-10 mb-10'>
            <p className='text-gray-1000 font-bold text-xl'>Acessar</p>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block bg-gray-60 mt-6" type="text" placeholder="Usuário"/>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block bg-gray-60 mt-4" type="text" placeholder="Senha"/>
            
            <p className='text-gray-1000 font-bold text-sm mb-5 hover:cursor-pointer hover:underline'>Esqueci minha senha</p>            
            <button className='text-sm bg-gray-1000 hover:bg-gray-900 text-white font-bold	py-2.5 px-4 rounded-lg w-full'>
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}