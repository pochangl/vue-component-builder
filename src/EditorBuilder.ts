import { IBuilder, IComponentProduct } from './Builder'
import { EditorComponent } from './EditorComponent'
import { Serializer } from './Serializer'
import { IWidgetBuilder } from './WidgetBuilder'

interface IWidgetBuilderMap {
  readonly [key: string]: IWidgetBuilder
}

interface IEditorProduct extends IComponentProduct {
  Fields: string[]
  Tag: string
}

export interface IEditorBuilder extends IBuilder<IEditorProduct> {
  widgets: IWidgetBuilderMap
}

export class EditorBuilder implements IEditorBuilder {
  public widgets = {}
  public component: EditorComponent = new EditorComponent()
  public serializer = new Serializer()
  public tag = 'div'

  public build() {
    return {
      extends: new EditorComponent(),
      Serializer: this.serializer,
      Fields: Object.keys(this.widgets),
      Tag: this.tag,
    }
  }
}
