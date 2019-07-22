export interface IComponent {
  props: {
    value: object
  }
  watch: {
    value(to): void
    input(to): void
  }
  data(): {
    input: any
  }
  render(h): object
}

export abstract class Component implements IComponent {
  public props = {
    value: {
      required: true,
    },
  }
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
  public abstract render(h): object
  public data() {
    return {
      input: null,
    }
  }
}
