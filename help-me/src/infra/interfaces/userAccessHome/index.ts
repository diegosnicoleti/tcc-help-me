export interface Model {
  getPsychologists: () => Promise<any[]>
  postPsychologistComment: (data:{id_user:number, id_psico:number, comment:string}) => Promise<any>
}

export interface Mediator {
  getPsychologists: () => Promise<{data:any[]}>
  postPsychologistComment: (rawData:{id_user:number, id_psico:number, comment:string}) => Promise<{status:number}>
}

export interface ViewProps {
  psychologistNameSearchField: string
  psychologistsList: any[]
  foundPsychologistsList: any[]
  showRatingModal: boolean
  comment: string

  handleChangePsychologistName: ({target}: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeComment: ({target}: React.ChangeEvent<HTMLInputElement>) => void
  searchPsychologist: () => void
  openRatingModal: (idPsycho:number) => void
  closeRatingModal: () => void
  handleConfirmComment: () => void
}

export interface ControllerProps {
  mediator: Mediator
}