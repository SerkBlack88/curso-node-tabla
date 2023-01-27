
const fs = require('fs');
var colors = require('colors');

// const crearArchivo = ( base = 5 ) => {

//     return new Promise( (resolve, reject)=> {
//         console.log('=====================');
//         console.log('   Tabla del: ', base );
//         console.log('=====================');

//         let salida = '';

//         for (let index = 1; index <= 10; index++) {
        
//             // console.log(`${index} x ${base} = ${(index) * base }\n`)
//             salida += `${index} x ${base} = ${(index) * base }\n`
//         }

//         console.log(salida)

//         fs.writeFileSync( `tabla-${base}.txt`, salida );
//         // console.log(`tabla-${base}.txt creado`);
//         resolve(`tabla-${ base }.txt`);
//     })

    
// }

const crearArchivo = async( base = 5, listar = true, hasta = 10 ) => {

    try {

        let salida = '';
    
        for (let index = 1; index <= hasta; index++) {
        
            // console.log(`${index} x ${base} = ${(index) * base }\n`)
            salida += `${index} x ${base} = ${(index) * base }\n`
        }
        if( listar ){
            console.log('====================='.rainbow);
            console.log('   Tabla del: '.rainbow, base );
            console.log('====================='.rainbow);
            console.log(salida.rainbow)
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        // console.log(`tabla-${base}.txt creado`);
        return `tabla-${ base }.txt creado`;
        
    } catch (err) {
        throw err
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}