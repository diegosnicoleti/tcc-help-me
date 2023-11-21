export interface Model {
  postVerifyUser: (data:{email:string, password:string}) => Promise<any>
}

export interface Mediator {
  postVerifyUser: (rawData:{email:string, password:string}) => Promise<{status:number}>
}

export interface ViewProps {
  emailField: string
  passwordField: string

  handleChangeEmailField: ({target}: React.ChangeEvent<HTMLInputElement>) => void
  handleChangePasswordField: ({target}: React.ChangeEvent<HTMLInputElement>) => void
  handleLogin: () => void
}

export interface ControllerProps {
  mediator: Mediator
}