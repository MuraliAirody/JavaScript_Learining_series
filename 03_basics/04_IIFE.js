// Immediately Invoked Function Expressions (IIFE)
//it is a javascript function that runs as soon as it is defined

/* 

Avoid polluting the global namespace... If we have some initiation code that we don't need to use again, 
we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

    (() => {
        // some initiation code
        let firstVariable;
        let secondVariable;
    })();

    // firstVariable and secondVariable will be discarded after the function is executed.

*/


(function func(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
      //semicolon is must here otherwise function will not execute 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Raj') 