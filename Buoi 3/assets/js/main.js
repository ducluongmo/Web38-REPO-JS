// values type
// let a = 1;
// let b = a;

// console.log(b)

// b = b + 2;

// console.log(b)

// Kieu tham chieu
// let arr1 = [1,2,3]
// let arr2 = arr1

// arr2.push(5)

// console.log(arr2)
// duyet mang for 


// let array = [1,2,3,4]
// let sum = 0
// let sum_le = 0
// for(var i = 0; i < array.length; i++){
//     sum += array[i]

//     if(array[i] % 2 == 1){
//         sum_le = sum_le + array[i]
//     }
// }
// console.log(sum)
// console.log(sum_le)

// array.forEach(function(value, index) {
//     console.log(value)
//     sum += value
// })

// console.log(sum)

// for (const value of array) {
//     console.log(value)
//     sum += value
// }

// console.log(sum)



function oddNumbers(arr) {
    const result = arr.filter((e) => {
        return e % 2 == 0
    })
    return result
}

console.log(oddNumbers([1,2,3,4,5,6]))