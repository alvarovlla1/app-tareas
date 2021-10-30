require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
  let opt = '';

  do {
    opt = await mostrarMenu();
    console.log({ opt });
    if (opt !== '0') await pausa();
    console.log('Fin de la aplciación'.red);
  } while (opt !== '0');

  //   pausa();
};

main();
