import { setError, removeError, startLoading, finishLoading } from '../../actions/ui';
import { types } from '../../types/types';


describe('Pruebas en ui-actions', () => {

    test('Todas las acciones deben de funcionar', () => {
        
        const action = setError('AIUUUDAAA!!!');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'AIUUUDAAA!!!'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        // Evaluaciones de objetos
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });
        
    });
    
})
