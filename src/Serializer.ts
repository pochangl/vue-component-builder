import { IEncoder, ITransformer } from './interfaces'
import { isEquivalent } from './utils'

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
    let data = this.transform(input)
    return isEquivalent(data, output)
  }
  protected
}
