import { ISerializer, Serializer } from './Serializer'

export interface IWidgetSerializer extends ISerializer {
  getHints(input): Promise<any[]>
  transform(value: any): Promise<boolean | number | string | null>
}

export class WidgetSerializer extends Serializer implements IWidgetSerializer {
  public async getHints() {
    return []
  }
}
