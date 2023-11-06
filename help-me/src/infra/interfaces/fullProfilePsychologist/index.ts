export interface Model {
  getPsychologistsById:(id_psico:number) => Promise<any[]>
}

export interface Mediator {
  getPsychologistsById: (id_psico:number) => Promise<{data:any}>
}

export interface ViewProps {
  fullName: string
  biographySummary: string
  consultationFee: number
  consultationDuration: number
  clientType: string
  CRPNumber: number
  paymentType: string
  base64String: string
  contactLink: number
  specialtyType: string
  feedbackScore: number
  feedbackComment: string
}

export interface ControllerProps {
  mediator: Mediator
}