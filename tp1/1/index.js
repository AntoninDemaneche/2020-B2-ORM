const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let x = input[0];
    console.log(input)
    
    for (let i = 1; i < input.length; i++){
      let tab = input[i].split(' ');
        
        
        /*
        for( i = 0; i < input; i2++ ){
          x = x + i 
        }
        for( i = 1; i < input.lenght; i3++ ){
          x = x - i;
        }
        console.log(x)
        */
        
    }
    console.log(tab)
    console.log(x)




    /*
    console.log(x)
    if ( 10000 > x > 101 )
    return(100)
    if (x < 10000)
    return('KO')
    if(x > 100)
    return(1000)
    */


    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}

/* 
Si fin 100> = 1 000 
Si Fin 10 000> = 100 
Si Fin <10 000 = 0 

*/
