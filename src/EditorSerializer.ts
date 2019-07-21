import { ISerializer, Serializer } from './Serializer'

export interface IEditoSerializer extends ISerializer {
  fields: string[]
}

export class EditorSerializer extends Serializer implements IEditoSerializer {
  public fields: string[]

  constructor(fields: string[]) {
    super()
    this.fields = fields
  }
}
