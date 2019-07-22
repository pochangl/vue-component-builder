import { Component } from './Component'
import { ISerializer } from './Serializer'

export class EditorComponent extends Component {
  public $options: {
    Serializer: ISerializer
    Tag: string
    Fields: string[]
  }
  public render(h): object {
    return h(this.$options.Tag, {}, this.$options.Fields.map(name))
  }
}
