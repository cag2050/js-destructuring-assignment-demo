// let a = 1
// let b = 2
// let c = 3
// 等价于
let [a, b, c] = [1, 2, 3]

// 解构赋值：允许指定默认值
let [foo = true] = []

// 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
let [x = 1] = [undefined];
// x // 1
// let [x = 1] = [null];
// x // null
// 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

console.log(a)
console.log(b)
console.log(c)
console.log(foo)
console.log(x)