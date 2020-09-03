// Function.prototype.newbind = function () {
//   const args = Array.prototype.slice.call(arguments)
//   const t = args.shift()
//   fn1.newbind()所以这里的this为fn1
//   const self = this
//   返回一个函数
//   return function () {
//     return self.apply(t, args)
//   }
// }

Function.prototype.newbind = function (...args) {
  const t = args.shift()
  const self = this
  return function () {
    return self.apply(t, args)
  }
}

function fn1(a, b, c) {
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}

const fn2 = fn1.newbind({ x: 100 }, 10, 20, 30)
console.log(fn2())
