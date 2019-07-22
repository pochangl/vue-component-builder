import { IComponent } from './interfaces'
import { ISerializer } from './Serializer'

export interface IComponentProduct {
  extends: IComponent
  Serializer: ISerializer
  watch: {
    value(to): void
    input(to): void
  }
  data(): {
    input: any
  }
}

export interface IBuilder<Product> {
  component: IComponent
  serializer: ISerializer

  build(): Product
}

export class ComponentProduct implements IComponentProduct {
  extends: IComponent
  Serializer: ISerializer
  public watch = {
    value(to) {
      if (!this.isEquvalent) {
        this.input = this.$options.Serializer.transform(to)
      }
    },
    input(to) {
      if (!this.isEquivalent) {
        this.$emit('update', this.$options.Serializer.encode(to))
      }
    },
  }
  public data() {
    return {
      input: null,
    }
  }
}
