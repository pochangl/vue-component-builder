export function isEquivalent(data1: any, data2: any): boolean {
  // check for data equality
  if (data1 instanceof Object && data2 instanceof Object) {
    if (data1.constructor === data2.constructor) {
      for (let key of data1) {
        if (!this.equal(data1[key], data2[key])) {
          return false
        }
      }
      return true
    } else {
      return false
    }
  } else {
    return data1 === data2
  }
}
