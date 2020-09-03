const obj = {
  name: 'xx',
  age: 18,
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', { c: 1 }]
}

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  console.log(typeof obj)
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

const newObj = deepClone(obj)
obj.address.city = 'shanghai'
obj.arr[2].d = 4
console.log('obj===>', obj)
console.log('newObj===>', newObj)
