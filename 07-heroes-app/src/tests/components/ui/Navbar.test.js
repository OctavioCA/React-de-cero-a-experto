import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';


describe('Pruebas en <Navbar />', () => {

    // Se utiliza el mock para mandar algo al router
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    // Contexto que se reutiliza en otras pruebas
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Aram'
        }
    }

    // Este wrapper va afuera porque se utiliza en varias pruebas
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    // Limpiar el mock
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {
     
        // Para que muestre el usuario

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Aram');

    });

    test('Debe de llamar el logout y el usar history', () => {
        
        // Este test puede llegar a ser más complejo por la parte del mock
        // Se debe observar en la terminal de tests para saber que "funciones" se requieren

        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');

    });
    
})
