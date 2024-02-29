const radius = [5,2,6,8,3,10];

const calculateArea = (radius)=>{
    const output =[];
    for(let i=0;i<radius.length;i++){
       output.push(Math.PI*radius[i]*radius[i]);
    }
    return output
}
const calculateCircumference = (radius)=>{
    const output =[];
    for(let i=0;i<radius.length;i++){
       output.push(2*Math.PI*radius[i]);
    }
    return output
}
const calculateDiameter = (radius)=>{
    const output =[];
    for(let i=0;i<radius.length;i++){
       output.push(2*radius[i]);
    }
    return output
}
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

// above code violating the DRY principle
// so by using Higher Order function can avoid the boiler plate code

