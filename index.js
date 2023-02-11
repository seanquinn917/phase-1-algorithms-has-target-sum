function hasTargetSum(array, target) {
  // Write your algorithm here
  //add each num in array to see is any combination equals target
 //start at 0 and work through before optimizing
 //look through array
 for(i=0; i<=array.length; i++){
//continue through rest of array
  for(j = i +1; j <=array.length; j++){
  // add numbers to see if they equal target
    if(array[i] + array[j] === target){
      //return the two numbers 
      return true} 
      }
    } 
    return false
}
  
  



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
