
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

// NOTA IMPORTANTE, ahora los prefijos use y set para funciones o variables está reservada
const usaContext = ( { clave, nombre, edad, rango = 'Capitán' } ) => {

    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

};

const { nombreClave, anios, latlng:{ lat, lng } } = usaContext(persona);

console.log(nombreClave, anios);
console.log( lat, lng )