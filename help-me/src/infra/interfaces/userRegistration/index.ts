export interface Model {
  postPsychologist: (data:{email:string, password:string}) => Promise<any>
}

export interface Mediator {
  postPsychologist: (rawData:{email:string, password:string}) => Promise<{status:number}>
}

export interface ViewProps {
  email:string
  password:string
  confirmPassword:string

  handleChangeEmail: ({target}: React.ChangeEvent<HTMLInputElement>) => void
  handleChangePassword: ({target}: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeConfirmPassword: ({target}: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => void
}

export interface ControllerProps {
  mediator: Mediator
}