import { IBuilder, IProduct } from './Builder'
import { WidgetComponent } from './WidgetComponent'
import { IWidgetSerializer, WidgetSerializer } from './WidgetSerializer'

export interface IWidgetProduct extends IProduct {
  Serializer: IWidgetSerializer
}

export interface IWidgetBuilder extends IBuilder<IWidgetProduct> {
  serializer: IWidgetSerializer
  build(): IWidgetProduct
}

export class WidgetBuilder implements IWidgetBuilder {
  public component: WidgetComponent = new WidgetComponent()
  public serializer = new WidgetSerializer()

  public build() {
    return {
      extends: this.component,
      Serializer: this.serializer,
    }
  }
}
