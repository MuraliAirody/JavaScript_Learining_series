/*
    switch (key) {
        case value:
            
            break;

        default:
            break;
    }
*/

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        
    case "april":
        console.log("april");
        

    default:
        console.log("default case match");
}
/*
   if the there is no break then the next case is also execute without checking the case condition
*/