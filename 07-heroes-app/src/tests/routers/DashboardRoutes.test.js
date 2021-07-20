import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DashboardRoutes />', () => {
    
    // Reutilizando el context de las pruebas de routers
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Anacleto'
        }
    }


    test('Debe mostrarse correctamente', () => {
        
        // Este test puede ser más complejo dependiendo de la necesidad

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Anacleto');

    });
    
})
