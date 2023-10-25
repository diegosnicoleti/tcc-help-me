export interface Model {
  getPsychologistsById:(id_psico:number) => Promise<any[]>
}

export interface Mediator {
  getPsychologistsById: (id_psico:number) => Promise<{data:any[]}>
}

export interface ViewProps {

}

export interface ControllerProps {
  mediator: Mediator
}