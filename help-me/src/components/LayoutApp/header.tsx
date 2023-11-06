export default function Header(){

  const menu = ['Home', 'Curiosidades', 'Para Psicólogos'];

  return (
    <div className="fixed left-0 w-full py-3 flex justify-between items-center px-24">
      <div>logo</div>
      <div>
        <ul className="flex">
          {menu.map((item, index) => {
            return (
              <li className="mr-10 font-semibold" key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
      <div>
        <a href="user-login">
          <button className="bg-white border border-black mr-2 px-6 py-1 rounded-full font-bold
          hover:text-primary-800 transition ease-in-out duration-300"
          >
            Entrar
          </button>
        </a>
      </div>
    </div>
  )
}