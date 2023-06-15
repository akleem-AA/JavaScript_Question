//factorial by using recursion function
function recursion (num){
    if(num == 0) return 1
    return num * recursion(num-1)
}

console.log(recursion(5)) //125


//factorial by using for loop
function rec (n){
    if(n == 0) return 1
    let result = 1
    for(let i = 2;i<=n;i++){
        result *=i;
    }
    return result
}

const rs = rec(5)
console.log(rs) //125
