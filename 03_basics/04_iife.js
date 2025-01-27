// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
  
})();

// in arrow fnc form
((name) => {
    console.log(`DB CONNECTED two ${name}`);
    
})("Umesh");