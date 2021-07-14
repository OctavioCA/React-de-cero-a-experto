import { retornaArreglo } from '../../bases/07-deses-arr';


describe('Pruebas en desestructuración', () => {

    test('retornaArreglo debe de retornar un string y un número', () => {

        const [ letras, numeros ] = retornaArreglo(); // ['ABC', 123];

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );

    })
       
})
