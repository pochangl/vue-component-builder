import { IComponent } from './interfaces'
import { ISerializer } from './Serializer'

export interface IBuilderProduct {
  extends: IComponent
  Serializer: ISerializer
}

export interface IComponentBuilder {
  component: IComponent
  serializer: ISerializer

  build(): IBuilderProduct
}
