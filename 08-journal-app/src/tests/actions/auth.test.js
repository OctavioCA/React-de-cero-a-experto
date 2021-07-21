import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { types } from '../../types/types';
import { login, logout, startLogout, startLoginEmailPassword } from '../../actions/auth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);


describe('Pruebas con las acciones de Auth', () => {
    
    beforeEach(()=> {
        store = mockStore(initState);
    })

    test('Login y logout deben de crear la acción respectiva', () => {
       
        const uid = 'ABC123';
        const displayName = 'Aram';

        const loginAction = login( uid, displayName );
        const logoutAction = logout();

        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect( logoutAction ).toEqual({
            type: types.logout
        });

    });

    test('Debe de realizar el startLogout', async() => {
        
        await store.dispatch( startLogout() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });

    });


    test('Debe de iniciar el startLoginEmailPassword', async() => {
        
        await store.dispatch( startLoginEmailPassword('pruebachida@correo.com','123456') );

        const actions = store.getActions();
        
        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: 'NiZapqGamaQi74WueHxcCbgLpEr1',
                displayName: null
            }
        })

    });
    
})
