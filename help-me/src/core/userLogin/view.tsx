import { ViewProps } from '../../infra/interfaces/userLogin';
import BackgroundImage from './login-bg.jpg';

export default function View(props:ViewProps){
  return (
    <div className="bg-no-repeat bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-white rounded-lg'>
          <div className='ml-16 mr-16 mt-10 mb-10'>
            <p className='text-primary-800 font-bold text-xl'>Acessar</p>
            <input 
              className="rounded-lg py-2 pl-5 mb-4 w-full block bg-gray-60 mt-6"
              type="text"
              placeholder="Usuário"
              value={props.emailField}
              onChange={props.handleChangeEmailField}
            />
            <input
              className="rounded-lg py-2 pl-5 mb-4 w-full block bg-gray-60 mt-4"
              type="text"
              placeholder="Senha"
              value={props.passwordField}
              onChange={props.handleChangePasswordField}
            />
            
            <p className='text-primary-800 font-bold text-sm mb-5 hover:cursor-pointer hover:underline'>Esqueci minha senha</p>            
            <button className='text-sm bg-primary-800 hover:bg-primary-900 text-white font-bold	py-2.5 px-4 rounded-lg w-full'
              onClick={props.handleLogin}
            >
              ENTRAR
            </button>
            <div className='flex text-sm mt-4'>
              <p className='mr-2'>Não tem uma conta?</p>
              <a href="user-registration">
                <p className='font-bold text-primary-800 hover:text-primary-900 hover:cursor-pointer'>Registre-se</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}