import React from 'react';
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";


describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow( <CounterApp value={0} /> ); // Base

    beforeEach( () => {

        wrapper = shallow( <CounterApp value={0} /> ); // "Reiniciador"

    });

    test('Debe mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe mostrar el valor por defecto de 0', () => {

        const wrapper = shallow( <CounterApp value={ 0 } /> );

        const counterText = wrapper.find('p').text().trim();

        expect( counterText ).toBe('0');

    });

    test('Debe de incrementar con el botón de +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('p').text().trim();
        expect( counterText ).toBe('1');
        
    });

    test('Debe de colocar el valor por defecto con el botón de reset', () => {

        const wrapper = shallow( <CounterApp value={ 1 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('p').text().trim();

        expect( counterText ).toBe('1');

    });
    

    test('Debe de decrementar con el botón de -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('p').text().trim();
        expect( counterText ).toBe('0');
        
    });   
    
    
});
