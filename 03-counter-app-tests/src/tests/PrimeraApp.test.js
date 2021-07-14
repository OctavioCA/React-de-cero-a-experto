import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe mostrar el mensaje "Hola soy Gokú"', () => {     
    //     const saludo = 'Hola, soy Gokú';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Gokú';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar el subtítulo enviado por props', () => {

        const saludo = 'Hola, soy Gokú';
        const subTitulo = 'Soy un subtítulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo } 
            />
        );

        const textoParrafo = wrapper.find('p').text().trim();
        
        expect( textoParrafo ).toBe( subTitulo );
        
    })
    
        
    
})
