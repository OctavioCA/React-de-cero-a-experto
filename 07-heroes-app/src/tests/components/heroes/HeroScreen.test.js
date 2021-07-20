import React from 'react';
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

// Esta es una de las pruebas más complicadas de esta app...

describe('Pruebas en <HeroScreen />', () => {

    // Dependencia que debemos de mandar y funciones a implementar, es un mock
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }
    
    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        
        // No olvidarnos de envolver el higher order component!
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history } />
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe(true);

    });

    test('Debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        );
        
        // Que exista el row
        expect( wrapper.find('.row').exists() ).toBe(true);
        
    });

    test('Debe de regresar a la pantalla anterior con PUSH', () => {

        // Volvemos a utilizar el history pero con 1

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        // interacción con el botón

        wrapper.find('button').prop('onClick')();
        
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    });

    test('Debe de regresar a la pantalla anterior GOBACK', () => {
        
        // Usamos el history globaL

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        
        // el push no debe ser llamado y por eso usamos el 0
        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();

    });


    test('Debe de llamar el redirect si el hero no existe', () => {

        //  Para probar que si se usa una url extraña nos mande al redirect

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123123']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        expect( wrapper.text() ).toBe('');
            
    });
    
})
