import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {
    
    // Proveer el contexto
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de mostrar login si no está autenticado', () => {
        
        // Al trabajar con higher order component debo recordar utilizar mount

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        
    });


    test('debe de mostrar el componente marvel si está autenticado', () => {
        
        // Mostrar el contenido del componente si se está autenticado

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Aram'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);
        
    });
    
    
})
