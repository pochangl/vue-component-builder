/*
  not done, just collecting ideas
*/
import { mount } from '@vue/test-utils'

class BirthdayEditor extends Serializer {
  public isValidFormat(value) {
    try {
      return value.birthday.split('-').length == 2
    } catch (err) {
      return false
    }
  }
  public async transform(value) {
    return value.birthday.split('-')
  }
  public encode(data) {}
}

class BookEditor extends ListWidgetBuilder {
  widgets = {
    author: new AttributeEditor(),
    birthday: new BirthdayEditor(),
  }
}

function getWrapper(data) {
  return mount(BookEditor, {
    propsData: {
      value: {
        author: '',
        age: '',
        birthday: '',
      },
    },
  })
}

describe('ListWidgetBuilder', () => {})
