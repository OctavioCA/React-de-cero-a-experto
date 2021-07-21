import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';


describe('Pruebas en authReducer', () => {
    
    test('Debe de realizar el login', () => {

        // Cuando se recibe el login

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Aram'
            }
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Aram'
        })

        
    })

    test('Debe de realizar el logout', () => {

        // Cuando se acciona el logout

        const initState = {
            uid: 'jagdfjahdsf127362718',
            name: 'Aram'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({});
 
    })

    test('No debe de hacer cambios en el state', () => {

        // Acción que no se reconoce

        const initState = {
            uid: 'jagdfjahdsf127362718',
            name: 'Aram'
        };

        const action = {
            type: 'asdjkasd',
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual( initState );
 
    })
    

})
