import { IBuilder, IProduct } from './Builder'
import { ListWidgetComponent } from './ListWidgetComponent'
import { Serializer, ITransformer, ITransformerFunction } from './Serializer'
import { IWidgetBuilder } from './WidgetBuilder'

interface IWidgetBuilderMap {
  readonly [key: string]: {
    builder: IWidgetBuilder
    transformer?: ITransformer | ITransformerFunction
  }
}

interface IListWidgetProduct extends IProduct {
  Fields: string[]
  Tag: string
}

export interface IListWidgetBuilder extends IBuilder<IListWidgetProduct> {
  widgets: IWidgetBuilderMap
}

export class ListWidgetBuilder implements IListWidgetBuilder {
  public widgets = {}
  public component: ListWidgetComponent = new ListWidgetComponent()
  public serializer = new Serializer()
  public tag = 'div'

  public build() {
    return {
      extends: new ListWidgetComponent(),
      Serializer: this.serializer,
      Fields: Object.keys(this.widgets),
      Tag: this.tag,
    }
  }
}
