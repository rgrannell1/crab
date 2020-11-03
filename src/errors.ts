
export class JordanPetersonException extends Error {
  constructor (message:string) {
    super(message)
    this.name = "JordanPetersonException"
  }
}

export class CarcinisationException extends Error {
  constructor(message: string) {
    super(message)
    this.name = "CarcinisationException"
  }
}

export class DispleasedCrabsException extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DispleasedCrabs"
  }
}
