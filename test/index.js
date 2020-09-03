function People(name,age){
  this.name = name
  this.age = age
}
People.prototype.say = (name) => {
  console.log(`${name} say something`)
}
const student = new People('kuma', 22)

console.dir(People)
console.dir(student)