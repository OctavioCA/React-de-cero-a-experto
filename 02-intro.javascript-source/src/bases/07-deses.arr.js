

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const[ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arreglo del arr se llamará nombre
// 2. se llamará ponerNombre
const usarState = ( valor ) => {
    return [valor, ()=>{ console.log('Hola mundo') }];
}

const [ nombre, ponerNombre ] = usarState( 'Goku' );

console.log( nombre )
ponerNombre();