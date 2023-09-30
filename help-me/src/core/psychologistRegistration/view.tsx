
export default function View(){
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex">
        <div className="bg-gray-500 rounded-lg">
          <div className="ml-16 mt-8 mb-8 mr-14">
            <p className="font-semibold text-white text-xl mb-5">Crie sua conta</p>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="Nome"/>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="Sobrenome"/>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="CRP"/>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="E-mail"/>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="Senha"/>
            <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="Confirme a senha"/>
            <p className="text-center font-bold text-white max-w-xs text-sm mb-3">
              Ao se registrar, você aceita nossos 
              <span className='text-gray-900'> termos de uso</span> e a nossa <span className='text-gray-900'>política de privacidade</span>.
            </p>
            <button className='text-sm bg-primary-800 hover:bg-primary-900 text-white font-bold	py-2.5 px-4 rounded-lg w-full'>
              CADASTRAR
            </button>
          </div>
        </div>
        
        <div>
          {/* <img src={UserRegistration} alt="" /> */}
        </div>
      </div>
    </div>
  )
}