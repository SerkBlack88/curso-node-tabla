const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

// console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);

// const [,, baseNumber = 'base=5'] = process.argv;
// const [, newBaseNumber = 5] = baseNumber.split('=')
// console.log(newBaseNumber);

// fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado`)
// })

// const base = 7;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err) );