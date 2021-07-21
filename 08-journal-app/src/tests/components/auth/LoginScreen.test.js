import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn(),
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <LoginScreen /> 
        </MemoryRouter>
    </Provider>

)

describe('Pruebas en <LoginScreen />', () => {

    beforeEach(()=> {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {

        // Comparando con snapshot
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de disparar la acción de startGoogleLogin', () => {
        
        // El inicio de sesión con google debe dispararse

        wrapper.find('.google-btn').prop('onClick')();

        expect( startGoogleLogin ).toHaveBeenCalled();
    });
    
    
    test('Debe de disparar el startLogin con los respectivos argumentos', () => {
        
        // Llené los datos porque así lo tengo

        wrapper.find('form').prop('onSubmit')({ 
            preventDefault(){}
        });

        expect( startLoginEmailPassword ).toHaveBeenLastCalledWith('aram@gmail.com','123456');

    });
    
})
