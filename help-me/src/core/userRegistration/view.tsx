import { ViewProps } from '../../infra/interfaces/userRegistration';
import UserRegistration from './userRegistration.svg';

export default function View(props:ViewProps){
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex">
          <div className="bg-primary-800 rounded-lg">
            <div className="ml-16 mt-8 mb-8 mr-14">
              <p className="font-semibold text-white text-xl mb-5">Crie sua conta</p>
              <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="email" placeholder="E-mail" value={props.email} onChange={props.handleChangeEmail}/>
              <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="Senha" value={props.password} onChange={props.handleChangePassword}/>
              <input className="rounded-lg py-2 pl-5 mb-4 w-full block" type="text" placeholder="Confirme a senha"/>
              <p className="text-center font-bold text-white max-w-xs text-sm mb-3">
                Ao se registrar, você aceita nossos 
                <span className='text-gray-900'> termos de uso</span> e a nossa <span className='text-gray-900'>política de privacidade</span>.
              </p>
              <button className='text-sm bg-gray-900 hover:bg-gray-800 text-white font-bold	py-2.5 px-4 rounded-lg w-full' onClick={props.handleSubmit}>
                CADASTRAR
              </button>
            </div>
          </div>
          
          <div>
            <img src={UserRegistration} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}