
describe('Pruebas en el archivo demo.test.js', () => {

    test('Deben ser iguales los string', () => {

    // 1. Inicialización
    const mensaje = 'Hola mundo';

    // 2. Estímulo
    const mensaje2 = `Hola mundo`;

    // 3. Observar el comportamiento
    expect( mensaje ).toBe( mensaje2 ); // Que el contenido sea el mismo ===

})

});


