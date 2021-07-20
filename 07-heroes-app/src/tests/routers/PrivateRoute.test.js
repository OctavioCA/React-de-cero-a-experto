import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {
    
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    // simular storage
    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        
        // el MemoryRouter es un componente que ayuda a hacer pruebas en rutas
        // Debemos usar mount para utilizar toda la estructura en la prueba

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(true);
        // asegura que esté el localStorage
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');

    });


    test('debe de bloquear el componente si no está autenticado', () => {
        
        // Lo mismo que el anterior pero con false

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(false);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');

    });
      

})
