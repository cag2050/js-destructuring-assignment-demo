function add([x, y]) {
    console.log([x, y])
}

// 为参数指定默认值，推荐使用
function add2([x, y] = [0, 0]) {
    console.log([x, y])
}

// 为变量x和y指定默认值
function add3([x = 0, y = 0]) {
    console.log([x, y])
}

add([1, 2]);
add([])
// add() // 报错：TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined

add2([1, 2]);
add2([])
add2()

add3([1, 2]);
add3([])
// add3() // 报错：TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined