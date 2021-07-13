


const nombre = 'Octavio';
const apellido = 'Cuellar';

// const nombreCompleto = nomre + ' ' + appelido;`
const nombreCompleto = ` 
${ nombre }
${ apellido }
${ 1 + 1 }
`;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }` )