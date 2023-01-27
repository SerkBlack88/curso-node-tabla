const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Define la base de la tabla a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Define si se muestra o no la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Define hasta qué número se realizará la tabla de multiplicar'
    })
    .check( (argv, options) => {
        console.log('yargs', argv)
        if ( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .argv;

module.exports = argv;