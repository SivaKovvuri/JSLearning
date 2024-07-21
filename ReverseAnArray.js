    const log = console.log
    let arr = ['apples', 'oranges', 'grapes'];
    let arr1 = arr.reduce((acc, val) => {
        acc.unshift(val);
        return acc;
       
    },[])
    log(arr1)
