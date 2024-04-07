//template or a blueprint
//                         our parameters
function sortThreeNumbers(num1,num2,num3){
  // write your if statements below
  // if num1 is the largest
  if (num1 > num2 && num1 > num3){
    // if num2 is the second largest
    if (num2 > num3){
      console.log(num1,num2,num3)
    }
    // if num3 is the second largest
    else{
      console.log(num1,num3,num2)
    }
  }
sortThreeNumbers(5,27,10)
sortThreeNumbers(7, 22, 35)   


// do not touch the below line of code

module.exports = {sortThreeNumbers}