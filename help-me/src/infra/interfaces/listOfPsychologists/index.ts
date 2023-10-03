export interface Model {
  getPsychologists: () => Promise<any[]>
}

export interface Mediator {
  getPsychologists: () => Promise<{data:any[]}>
}

export interface ViewProps {

}

export interface ControllerProps {
  mediator: Mediator
}