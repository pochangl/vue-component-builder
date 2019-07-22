import { IComponentBuilder, IBuilderProduct } from './ComponentBuilder'
import { IWidgetComponent, WidgetComponent } from './WidgetComponent'
import { IWidgetSerializer, WidgetSerializer } from './WidgetSerializer'

export interface IWidgetBuilderProduct extends IBuilderProduct {
  extends: IWidgetComponent
  Serializer: IWidgetSerializer
}

export interface IWidgetBuilder
  extends IComponentBuilder<IWidgetBuilderProduct> {
  component: IWidgetComponent
  serializer: IWidgetSerializer

  build(): IWidgetBuilderProduct
}

export class WidgetBuilder implements IWidgetBuilder {
  public component = new WidgetComponent()
  public serializer = new WidgetSerializer()

  public build() {
    return {
      extends: this.component,
      Serializer: this.serializer,
    }
  }
}
