var names = ['siva','naga','raju'];
console.log(names)
console.log(names.length)
console.log(names[names.length-1])

//push pop

//unshift shift

//push and unshift will insert data

//pop and shift will remove data


//push
console.log(names.push('kovvuri'))
console.log(names)


// it will remove the last element in the array and also it will return it
console.log(names.pop())
console.log(names)

//unshift will insert rows at the start; like a stack; it will lift the stack and insert at the start
names.unshift('kovvuri')
console.log(names)

//shift will remove the element
names.shift()
console.log(names)
