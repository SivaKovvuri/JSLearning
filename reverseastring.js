const log = console.log;
let str= 'Welcome to Rajahmundry';
let str1 =str.split('').reduce((acc,val)=>{
    return val+acc;
})
let str2= str.split('').reverse().join('');
let temp=''
for (let index = str.split('').length-1; index>=0; index --) {
    temp = temp+str[index];
    
}

log(str)
log(str1)
log(str2)
log(temp)