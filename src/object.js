let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
// 对象的解构赋值是下面形式的简写
// let {foo: foo, bar: bar} = {foo: "aaa", bar: "bbb"};


let obj = {first: 'jeff', last: 'chen'}
// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
let {first:f, last:l} = obj

console.log(foo)
console.log(bar)
console.log(f)