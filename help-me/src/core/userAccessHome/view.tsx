import { Base64ToImage } from "../../components/Base64ToImage";
import { ViewProps } from "../../infra/interfaces/userAccessHome";

export default function View(props:ViewProps){
  return (
    <>
      <div className="mt-20 ml-10 mr-10">
        <div className="shadow-lg p-6">
          <p className="text-xl text-primary-900 font-bold">Bem vindo(a) ao seu portal, Help Me!</p>
          <p className="mt-5 ml-10 font-bold">Deixe seu comentário sobre o psicólogo:</p>
          <p className="mt-2 ml-10">
            Dessa forma, além de contribuir para que o psicólogo saiba como estão sendo seus atendimentos, você também contribui para que mais pessoas saibam mais sobre esse profissional.
          </p>

          <div className="mt-4 relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg border border-primary-700"
              placeholder="Digite o nome do psicólogo"
              required
              value={props.psychologistNameSearchField}
              onChange={props.handleChangePsychologistName}
            />
            <button 
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-900 dark:hover:bg-primary-1000"
              onClick={props.searchPsychologist}
              >
                Pesquisar
            </button>
          </div>
        </div>

        <div className="shadow-lg p-6">
          {props.foundPsychologistsList.length > 0 ?
            <>
              {props.foundPsychologistsList.map((item:any, index:number) => {
                return(
                  <div className="bg-primary-50 mb-2 mt-4 rounded-3xl shadow-md py-4" key={index}>
                    <div className="flex items-center justify-center ml-4">
                      <div>
                        <Base64ToImage base64String={item.foto} height={100} width={100}/>
                      </div>
                      <div className='ml-3'>
                        <p className="text-primary-500 font-bold text-base">{item.nome_completo}</p>
                        <p className="text-gray-800 font-bold text-sm">CRP: {item.crp}</p>
                        <p className="mt-2 text-gray-800 font-bold text-sm">Sobre mim:</p>
                        <p className="text-gray-800 font-bold text-sm">
                          {item.biografia_resumo}
                        </p>
                      </div>                      
                    </div>
                    
                    <div className="flex justify-end mr-5">
                      <button
                        type="submit"
                        className="text-primary-900 font-medium rounded-lg text-sm px-4 py-2 bg-white border border-primary-900 hover:bg-primary-900 hover:text-white"
                        onClick={() => props.openRatingModal(item.id_psicologo)}
                        >
                         Avaliar Psicólogo
                      </button>
                    </div>
                  </div>
                )
              })}
            </>
            :
            <>Sem registro para mostrar</>
          }
        </div>
      </div>
      
      {props.showRatingModal ?
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-96 p-6 rounded shadow-lg relative z-50">
            <h2 className="text-lg font-bold mb-4">Avaliar Psicólogo</h2>
            <label>Comente sobre o atendimento</label>
            <input
              type="text"
              value={props.comment}
              onChange={props.handleChangeComment}
              className="w-full p-2 border border-gray-300 mb-4"
            />
            <button
              onClick={props.handleConfirmComment}
              className="text-white font-medium rounded-lg text-sm px-4 py-2 bg-primary-900 mr-2"
            >
              Confirmar
            </button>
            <button
              onClick={props.closeRatingModal}
              className="bg-gray-500 text-white rounded-lg font-medium text-sm px-4 py-2"
            >
              Cancelar
            </button>
          </div>
        </div>
      :
        <></>
      }
    </>
  )
}