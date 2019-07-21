import { IEncoder, ITransformer } from './interfaces'

export interface ISerializer extends IEncoder, ITransformer {}

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
}
