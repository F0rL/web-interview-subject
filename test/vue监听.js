// Object.defineProperty 需要递归到底，一次性计算量大
// 新增和删属性监听不到(需要vue.set vue.delete)
// 无法原生监听数组，需要特殊处理

const obj = {
  name: 'xxx',
  age: 11,
  info: {
    address: 'city'
  },
  nums: [12, 23, 44]
}

const updateView = key => {
  console.log(`${key}----更新视图`)
}

function defineReactive(target, key, value) {
  // 深度监听
  obsever(value)

  Object.defineProperty(target, key, {
    get() {
      console.log(`获取${key}值`)
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        obsever(newValue)
        value = newValue
        updateView(key)
      }
    }
  })
}

function obsever(target) {
  if (typeof target !== 'object' || target === null) {
    return target
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

// 数组的监听简单范例
const oldArrayProperty = Array.prototype
const arrProto = Object.create(oldArrayProperty)[
  ('push', 'pop', 'shift', 'unshift', 'splice')
].forEach(method => {
  arrProto[method] = function () {
    updateView()
    oldArrayProperty[method].call(this, ...arguments)
  }
})


obsever(obj)

console.log(obj.name)
obj.name = 'yyy'
console.log(obj.info.address)
obj.info.address = 'beijing'
