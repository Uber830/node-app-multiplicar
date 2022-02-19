require("colors");

const argv = require("yargs")
  .option(
    "b",
    {
      alias: "base",
      type: "Number",
      default: 5,
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar".rainbow.italic,
    },
    "l",
    {
      alias: "listar",
      type: "Boolean",
      default: false,
      describe: "Muestra la tabla en consola".grey.italic,
    },
    "h",
    {
      alias: "hasta",
      type: "Number",
      default: 10,
      describe: "Es el limite de la tabla de multiplicar hasta donde va ha llegar".rainbow.italic,
    }
  )

  .check((argv, Option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero".red.italic;
    }
    return true;
  }).argv; //Instancimos yargs

module.exports = argv;
