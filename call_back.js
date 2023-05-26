//what is call back function ...
//ans:- callback function is a function that is passed as an argument to another function 

const add =(a,b)=>{
    return a+b;
}
const subtract =(a,b)=>{
    return a-b;
}
const multiplie =(x,y)=>{
    return x*y;
}

const calculator = (num1,num2,operator)=>{
    return operator(num1,num2)
}

console.log(calculator(2,3,add))//5
