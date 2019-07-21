import { IComponent } from './interfaces'
import { IWidgetSerializer } from './WidgetSerializer'

export interface IWidgetComponent extends IComponent {
  methods: {
    update(value)
  }
}

export class WidgetComponent implements IWidgetComponent {
  public methods = {
    update(value) {
      return this.$options.Serializer.encode(value)
    },
  }
  public props = {
    value: {
      required: true,
    },
  }
  private $options: {
    Serializer: IWidgetSerializer
  }
  public render(h): object {
    return h('input', {
      listeners: {
        update: value => {
          this.$options.Serializer.encode(value)
        },
      },
    })
  }
}
