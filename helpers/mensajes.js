const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('================================================='.green);
    console.log('             Seleccione una opción'.white);
    console.log('=================================================\n'.green);
    console.log(`${'1'.green}. Crear tarea`);
    console.log(`${'2'.green}. Mostrar tareas`);
    console.log(`${'3'.green}. Mostrar tareas`);
    console.log(`${'4'.green}. Mostrar tareas completadas`);
    console.log(`${'5'.green}. Mostrar tareas pendientes`);
    console.log(`${'6'.green}. Completar tareas`);
    console.log(`${'7'.green}. Borrar una tarea`);
    console.log(`${'0'.green}. Salir\n`);

    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question('Seleccione una opción: ', (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(`Presione ${'ENTER'.green} para continuar`, (opt) => {
      readLine.close();
      resolve();
    });
  });
};
module.exports = { mostrarMenu, pausa };
