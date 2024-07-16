// const original = { a: 1, b: { c: 2 } };
// const shallowCopy = Object.assign({}, original);

// console.log(shallowCopy); // { a: 1, b: { c: 2 } }
// shallowCopy.b.c = 3;
// console.log(original.b.c); // 3 (original object is affected)




// let a = [1,2,3,4,5]
// let b = a.map((c,i,arr) => {
//     return  c*3;
// })

// console.log('a',a,'b',b)


// let a = [1,2,3]
// let b = a.map((c,i,arr)=>{
//     return c*3;
// })
// console.log('a',a,'b',b)


// let c = [1,2,3,4,5]
// let d = a.filter((c,i,arr) => {
//     return  c!=3
// })

// console.log(c,d)



// let a = [1,2,3]
// let b = a.forEach((element,i,arr) => {

//     return  element = element +100

// });
// console.log('a',a,'b',b)    
// let c=a.map((e,i,arr)=>{
//     return  e=e+100
// })
// console.log('a',a,'c',c)



// let a = Array.from({length:100000},(_,i)=> i *2 )
// console.log(a)



// //Shallow Copy
// let a =[1,2,3];
// let b =Array.from(a);

// a[0]=1000;
// console.log('a',a)
// console.log('b',b)



/*********************
Given an array
let a= [2,4,5,7,11]
print all pairs that form the sum the k where k=9
*/
let array = [2, 4, 5, 7, 11]
let k = 9;
let s = new Map();
let pairs = []
array.forEach((val, index, arr) => {
    let complement = k - val;
    if (!s.has(complement)) {

        pairs.push({ val, complement });
    }
    s[val] = true;
    
}

)
console.log(pairs)


