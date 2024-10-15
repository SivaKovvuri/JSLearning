function constfuncs() {
    let funcs = [];
    for (let i = 0; i < 10; i++) {
        funcs[i] = function() {
            return i;
        };
    }
    return funcs;
}
let funcs = constfuncs();
console.log(funcs[5]());
