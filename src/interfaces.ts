export interface IComponent {
  props: {
    value: object
  }
  render(h): object
}
export interface ITransformer {
  isValidFormat(value: object): boolean
  // simple data check

  transform(value): Promise<any>
  // transform data from props.value
}

export interface IEncoder {
  isValidData(value: object): Promise<boolean>
  // async check for validating data from server

  encode(data): Promise<object>
  // encode data from value
}

/*
export interface IComponentMap {
  [key: string]: IComponent;
}
*/
/*
export interface IWidgetSerializer extends ISerializer {
  getHints(input): Promise<any[]>;
}
export interface IWidgetMap {
  [key: string]: IWidget;
}

export interface IEditor extends ComponentFactory {
  serializer: ISerializer;
}

export interface IViewComponent extends IComponent {
  data(): {
    edit: boolean;
  };
}

export interface IBuilder {
  component: IComponent;
  editor: ISerializer;
  build(): IViewComponent;
}
*/
