import { IComponentBuilder } from './ComponentBuilder'
import { EditorComponent, IEditorComponent } from './EditorComponent'
import { ISerializer, Serializer } from './Serializer'
import { IWidgetBuilder } from './WidgetBuilder'

interface IWidgetBuilderMap {
  readonly [key: string]: IWidgetBuilder
}

export interface IEditorBuilder extends IComponentBuilder {
  widgets: IWidgetBuilderMap
  component: IEditorComponent

  build(): {
    extends: IEditorComponent
    Fields: string[]
    Serializer: ISerializer
    Tag: string
  }
}

export class EditorBuilder implements IEditorBuilder {
  public widgets = {}
  public component = new EditorComponent()
  public serializer = new Serializer()
  public tag: string

  public build() {
    return {
      extends: new EditorComponent(),
      Fields: Object.keys(this.widgets),
      Serializer: this.serializer,
      Tag: this.tag,
    }
  }
}
