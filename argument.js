function add(num1,num2){
    console.log([...arguments]);
    return num1+num2+arguments[2];
}
const sum=add(2,3,5);
console.log(sum);