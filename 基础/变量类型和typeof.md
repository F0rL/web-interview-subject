#### 值类型和引用类型的区别
常见的值类型： 字符串（string）、数值（number）、布尔值（boolean）、undefined、null、symbol

引用类型：对象（Object）、数组（Array）、函数（Function）
```js
// 值类型
let a = 100
let b = a
a = 200
console.log(b) // 200
```
```js
// 引用类型
let a = { age: 20 }
let b = a
b.age = 21
console.log(a.age) // 21
```
##### 值类型：

1. 占用空间固定，保存在栈中（当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址的引用变量。）

2. 保存与复制的是值本身

##### 引用类型：

1. 占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）

2. 保存与复制的是指向对象的一个指针

3. 使用new()方法构造出的对象是引用型

##### tips
null本身不是对象，typeof null === 'object’,是语言本身的一个bug。其原理是不同的对象在底层都是用二进制来表示的，在js中二进制前3位是0即判断是为对象，null的二进制表示是全0，即前三位都是0，所以执行typeof返回的是object，实际上null为基本数据类型。

#### typeof
[MDN typeof](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof)

```js
console.log(typeof 1)         //number
console.log(typeof 'aa')      //string
console.log(typeof true)      //boolean
console.log(typeof undefined) //undefined
console.log(typeof null)      //object
let foo = Symbol('foo')       
console.log(typeof foo)       //symbol

const obj = { a: 1 }          
const arr = [1, 2, 3]
function fun() {}
console.log(typeof obj)       //object
console.log(typeof arr)       //object
console.log(typeof fun)       //function
```

能判断所有值类型

识别函数

判断是否是引用类型（不可细分）
