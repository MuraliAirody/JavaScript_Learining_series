const radius = [5,2,6,8,3,10];

const area = (r) =>{
   return Math.PI*r*r
}
const circumference = (r) =>{
   return 2*Math.PI*r
}
const diameter = (r) =>{
   return 2*r
}

const calculate = (radius,fun)=>{
    const output =[];
    for(let i=0;i<radius.length;i++){
       output.push(fun(radius[i]));
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));



