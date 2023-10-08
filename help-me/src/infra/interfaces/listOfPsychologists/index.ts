export interface Model {
  getPsychologists: () => Promise<any[]>
}

export interface Mediator {
  getPsychologists: () => Promise<{data:any[]}>
}

export interface ViewProps {
  statesList: string[]

  specialtyList: string[]
  psychologistsList: PsychologistData[]
}

export interface ControllerProps {
  mediator: Mediator
}

export interface PsychologistData{
  id_psicologo: number
  id_usuario: number
  biografia_resumo: string
  cidade: string
  uf: string
  crp: number
  especialidade: string
  foto: string
  nome_completo: string
  numero_whats: number
  status: boolean  
}