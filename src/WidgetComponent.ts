import { Component } from './Component'
import { IWidgetSerializer } from './WidgetSerializer'

export class WidgetComponent extends Component {
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
