export interface Model {
  postVerifyUser: (data:{email:string, password:string}) => Promise<any>
}

export interface Mediator {
  postVerifyUser: (rawData:{email:string, password:string}) => Promise<{status:number}>
}

export interface ViewProps {

}

export interface ControllerProps {
  mediator: Mediator
}