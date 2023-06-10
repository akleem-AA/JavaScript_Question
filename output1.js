// const day = 'sat'
// let obj = {
//     "sat":"today is saturday",
//     'friday':'today is friday'
//     'monday':'today is monday'
// }

// const value = obj[day] ?? -1

// console.log(value)

function sum(){
    let i = 0
    let s = 0;
    
    while(i <100){
        s = s+i
        s = i+s
        i++
    }
    console.log(s)
}

console.log(sum()) //output 9900

function prit (n){
    if(n==0|| n==1||n==2)
    return 0;
    if(n==3)
    return 1;
    else
    return prit(n-1)+prit(n-2) +prit(n-3)
}
function pr(n){
    var ans = 0;
    for(var i = 1;i<n;i++){
        ans = ans+prit(i)+' ';
    }
    console.log(ans)
}

// pr(6) //00112

function fib(n){
    if(n<=1)
    return n;
    return fib(n-1) +fib(n-2)
}
console.log(fib(6)) //8

function fun(A,B){
    if(B ==0)
    return A;
    return fun(B,A %B);
    
}
var ans = fun(100,2000);
console.log(ans)//100
