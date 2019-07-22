import { IComponent } from './interfaces'
import { ISerializer } from './Serializer'

export class EditorComponent implements IComponent {
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
