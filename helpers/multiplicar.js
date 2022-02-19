const colors = require('colors'); //colors  
const fs = require("fs"); //FileSysten

const crearArchivo = async (operator, listar, hasta) => {
  try {
    let salida  = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${operator} X ${i} = ${operator * i}\n`;
      consola += `${operator} X ${i} = ${operator * i}\n`.rainbow.italic;
    }

    /* !listar == true: Muestra salida  */
    if (listar) {
      console.log("=================".yellow);
      console.log("    TABLA DEL  ".italic.magenta, colors.blue(operator));
      console.log("=================".red);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${operator}.txt`, salida);

    return `Archivo: tabla-${operator}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo }; //export function
