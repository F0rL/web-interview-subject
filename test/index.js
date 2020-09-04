const obj = { a: 100, b: 200 }
with(obj) {
  console.log(a)
  console.log(b)
  console.log(c)

}