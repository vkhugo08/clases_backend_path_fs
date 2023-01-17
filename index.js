//importamos el modulo path
const path = require('path');
const fileSystem = require('fs').promises;
const newPath = path.resolve('example.txt');

console.log(newPath);

//usando path.dirname
// indica el nombre d ela carpeta donde se encuentra el archivo o direccion en cuestion.

console.log(path.dirname(newPath));

//usando path.extname
// indica la extencion del archivo.

console.log(path.extname(newPath));

//usando fileSystem
// se importa arriba usando require('fs')

// usando fileSystem.readFile
//se utiliza para leer un archivo.
// recibe 3 parametros
//la ruta, la codificacion y una funcion de callback
//el callback a su vez recibe un error y data.
//! ejemplo 1
// fileSystem.readFile(newPath, 'utf-8', (error, data) =>{
//     if(error){
//         console.log(error);
//     }else {
//         console.log(data);
//     }
// });
 //! ejemplo 2. trabajando con promesas. checar la importacion arriba

(async () => {
    try {
        const data = await fileSystem.readFile(newPath,'utf-8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();