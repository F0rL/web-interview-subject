class prom {
  successed = null
  failed = null
  status = 'pendding'
  constructor(fn) {
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(result) {
    setTimeout(() => {
      this.status = 'fulfilled'
      this.successed(result)
    })
  }
  reject(result) {
    setTimeout(() => {
      this.status = 'rejected'
      this.failed(result)
    })
  }
  then(successed, failed) {
    this.successed = successed
    this.failed = failed
  }
}

new prom((resolve, reject) => {
  let [val, time] = [Math.random(), Math.random() * 1000]
  setTimeout(() => {
    val > 0.2 ? resolve(val) : reject(val)
  }, time)
}).then(
  val => console.log('promise 测试:', val),
  err => console.error('promise 错误测试:' + err)
)
