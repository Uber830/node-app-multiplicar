const { crearArchivo } = require("./helpers/multiplicar"); 
const  argv  = require("./config/yargs");
const colors = require('colors');


console.clear();

//console.log("base: yargs", argv.b );

// const [, , arg3 = "base=5"] = process.argv;
// const [ , base ] = arg3.split('=')

crearArchivo(argv.b, argv.l, argv.h)
  .then((result) => console.log(result.rainbow.italic, "Creado".italic.cyan))
  .catch((err) => console.log(err));
