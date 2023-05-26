// 1. palindrome value it's return a value which content same result like 212 and lavel ['level','cooc'] etc

function palidrom(data){

//first check the data is array or not 
    const arr = Array.isArray(data)
      let palidromValue = []
    if(arr){
    for(let i =0;i<data.length;i++){
        const str = data[i]
        let revers = str.split('').reverse().join('')
        
        if(str.toLowerCase() == revers.toLowerCase()){
            // console.log("palidrom value",str)
            palidromValue.push(str)
        }

    }
       return palidromValue
    }else{
     const str = String(data)
    let palindrome = str.split('').reverse().join('')
    if(palindrome == data){
        console.log("palindrome",data)
    }else{
        console.log("not palindrome",data)
    }
    }
  
}

const arry = palidrom(["aklem","aka","level","key"])
const string = palidrom("level")
const number = palidrom(121)
console.log(arry)
console.log(string)
console.log(number)

