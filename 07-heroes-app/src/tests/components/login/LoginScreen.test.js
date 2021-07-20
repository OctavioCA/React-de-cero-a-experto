import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {
    
    // Mock de history
    const history = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    // Proveer contexto
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    // Wrapper/Mount que vamos a utilziar en las pruebas
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ history } />
        </AuthContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {

        // Matchear snapshot
        
        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe de realizar el dispatch y la navegación', () => {

        // Manejar la referencia con handleClick       
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Octavio'
            }
        });
        
        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');

    });
     
})
