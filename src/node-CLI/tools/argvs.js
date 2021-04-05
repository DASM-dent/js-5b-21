const { require } = require("yargs");
//Argumentos procesados.
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv_all = yargs(hideBin(process.argv))
const options = require('./options');

// Agregar los nuevos comandos a nuestra aplicacion CLI

const argv = argv_all
    .command('create', 'Create new task', options.optionCreate)
    .command('update', 'Actualizar con completed', options.optionUpdate)
    .command('delete', 'Delete task', options.optionErase)
    .help()
    .argv;

    //Exportamos argv para poder usarlo en todo mi proyecto 
    module.exports = { argv }