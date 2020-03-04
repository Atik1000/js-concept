const nums=[2,3,5,7,8,11];
// const output=[];
// for(let i=0;i<nums.length;i++){
//     const element=nums[i];
//     const result=element*element;
//     output.push(result);

// }
//console.log(output);




///////////////////
// function square(element){
//     return element*element;

// }
//  const result=nums.map(function(element,index,Array){
//   console.log(element,index,Array);
//     return element*element;
// })
// console.log(result);
//////////////////
// const result=nums.map(x=>x*x);
// console.log(result);
const bigger=nums.filter(x=>x>5);
console.log(bigger);