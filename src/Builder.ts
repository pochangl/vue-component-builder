import { IComponent } from './Component'
import { ISerializer } from './Serializer'

export interface IProduct {
  extends: IComponent | IProduct
  Serializer: ISerializer
}

export interface IBuilder<Product extends IProduct> {
  component: IComponent
  serializer: ISerializer

  build(): Product
}
