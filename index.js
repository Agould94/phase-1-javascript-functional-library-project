
const standardInput = function(collection) {  
    if(!Array.isArray(collection)){
        return Object.values(collection)
    }
    else {
        return collection
    }
}

function myEach(collection, callback){
    let c = standardInput(collection)

    for (let i=0; i<c.length; i++){
        callback(c[i])
    }
    return collection 
}

function myMap(collection, callback){
   let c = standardInput(collection)
    
    const a = []
    for (let i=0; i<c.length; i++){
        a.push(callback(c[i]))
    }
    return a
}

function myReduce(collection, callback, acc){
    
    let c = standardInput(collection)

    if (!acc){
        acc=c[0];
        c = c.slice(1);
    }
    const a =[]
    for (let i=0; i<c.length; i++){
        acc = callback(acc, c[i], c)
    }
    return acc
}

const myFind = function(collection, predicate){
    const c = standardInput(collection)

    for(let i=0; i<c.length; i++){
        if (predicate(c[i])) return(c[i])
    }
    return undefined
}

const myFilter = function(testArr, excluder){
    const c = standardInput(testArr)
    const newArr = []
    for(let i=0; i<testArr.length; i++){
        if (excluder(c[i])) newArr.push(c[i])
    }
    return newArr
}

const myFirst = function(arr, stop=false) {
  return (stop) ? arr.slice(0, stop) : arr[0];
}