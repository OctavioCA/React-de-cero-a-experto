import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Pruebas en <SearchScreen />', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        
        // Se debe trabajar con MemoryRouter nuevamente por el tipo de querys/búsquedas
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');

    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        
        // Similar a la prueba anterior
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();

    });

    
    test('Debe de mostrar un error si no se encuentra el Hero', () => {
        
        // También es similar a la anterior, sólo queremos mostrar la pantalla de "no se encontró"
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe(`There is no a hero with batman123`);
        expect( wrapper ).toMatchSnapshot();

    });
    
    
    test('Debe de llamar el push del history', () => {

        // Mock sencillo de history
        const history = {
            push: jest.fn()
        };

        // Mount y MemoryRouter necesario
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={ history } /> } 
                />
            </MemoryRouter>
        );

        // Cambio de la caja de texto/buscador
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        // Al momento de subir/darle enter al formulario
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        // Como debió ser la búsqueda
        expect( history.push ).toHaveBeenCalledWith(`?q=batman`);
      
    });
    
})
