//slice
//slice returns a shallow copy of array 
//end is not included
//original array is not modified
//Negative Index starts from last

const log= console.log
let arr =[1,2,3,4,]
log(arr.slice(0,2))
log(arr)

log(arr.slice())