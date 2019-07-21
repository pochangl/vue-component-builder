import { IComponent } from './interfaces'
import { ISerializer, Serializer } from './Serializer'

export interface IEditorComponent extends IComponent {
  $options: {
    Serializer: ISerializer
    Tag: string
    Fields: string[]
  }
}

export class EditorComponent implements IEditorComponent {
  public $options: {
    Serializer: ISerializer
    Tag: string
    Fields: string[]
  }
  public props: {
    value: {
      required: true
    }
  }
  public render(h): object {
    return h(this.$options.Tag, {}, this.$options.Fields.map(name))
  }
}
