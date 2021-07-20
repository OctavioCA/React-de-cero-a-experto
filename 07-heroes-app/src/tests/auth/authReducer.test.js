import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        // Debe retornar el estado en logged:false
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });

    })

    test('debe de autenticar y colocar el name del usuario', () => {
        // Debemos crear la acción a "simular" para probar el estado en true
        const action = {
            type: types.login,
            payload: {
                name: 'Aram'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ 
            logged: true,
            name: 'Aram'
        });

    })

    test('debe de borrar el nombre/name del usuario y logged en false', () => {
        // Asegurar que haga logout con la acción para que el logged sea false
        const action = {
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Jazmín' }, action);
        expect( state ).toEqual({ logged: false });

    })
    

})
