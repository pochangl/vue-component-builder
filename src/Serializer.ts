import { isEquivalent } from './utils'

export interface TransformerFunction {
  (value: any): Promise<any>
}

export interface ITransformer {
  isValidFormat(value: object): boolean
  // simple data check

  transform(value: any): Promise<any>
  // transform data from props.value
}

export interface IEncoder {
  isValidData(value: object): Promise<boolean>
  // async check for validating data from server

  encode(data): Promise<object>
  // encode data from value
}

export interface ISerializer extends IEncoder, ITransformer {
  isEquivalent(input, output): boolean
}

export class Serializer implements ISerializer {
  public encode(data) {
    return data
  }
  public async isValidData(value) {
    return typeof value !== undefined
  }
  public isValidFormat(value) {
    return typeof value !== undefined
  }
  public async transform(value) {
    return typeof value !== undefined
  }
  public isEquivalent(input, output) {
    const data = this.transform(input)
    return isEquivalent(data, output)
  }
}
