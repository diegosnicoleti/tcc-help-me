export interface Model {
  getPsychologistsById:(id_psico:number) => Promise<any[]>
}

export interface Mediator {
  getPsychologistsById: (id_psico:number) => Promise<{data:any}>
}

export interface ViewProps {
  fullName: string
  biographySummary: string
}

export interface ControllerProps {
  mediator: Mediator
}