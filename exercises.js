let arrays = [[1,2,3], [4,5],[6]];
export function flattening(list){
return list.reduce((previousValue,currentValue)=> previousValue.concat(currentValue)
)
return result
}

console.log(flattening(arrays))

export function loop(value, test,update,body){

    //can't figure out how to comment out large pieces of code for loop version 
    // for(curValue =value;test(curlValue); curValue=update(curValue)){
    //     body(curValue)
    // } 
    //while loop version
    let curValue = value
    while(test(curValue)){
        console.log("Iteration, curValue"+curValue)
        let curValue=value
        if(test(curValue)){
            //If test is true do body
            console.log("Calling body...")
            body(curValue)
            curValue= update(curValue)
        }else{
        console.log("curValue test is false")
        break;
        }
    }
}

loop(3, n=> n > 0, n => n-1, console.log);
//every single value being tested must return true for the entire function to return true
export function everyLoop(array,test){
    let curResult = true
    for(let item of array){
        // console.log(test(item))
        curResult=curResult && test(item)
    }
    return curResult
}

export function everySome(array,test){
return !array.some((value)=>!test(value))
}

console.log("Should be true")
console.log(everyLoop([1,3,5], n => n <10));
console.log("Should be false")
console.log(everyLoop([2,4,16], n => n <10));
console.log("Should be true")
console.log(everyLoop([],n=> n <10));
