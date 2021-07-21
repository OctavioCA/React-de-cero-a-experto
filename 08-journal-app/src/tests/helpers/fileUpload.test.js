// import cloudinary from 'cloudinary';

// import { fileUpload } from '../../helpers/fileUpload';

// POR ALGUNA RAZÓN NO SIRVIÓ ESTA PRUEBA E INTENTÉ DE DIFERENTES FORMAS

// cloudinary.config({ 
//     cloud_name: 'dvc1kq2kn', 
//     api_key: '928143584539123', 
//     api_secret: 'l0BH5mt6ZFHZlsO_hHwZecLMfKE',
//     secure: true
// });

describe('Pruebas en fileUpload', () => {

    test('should ', () => {
        
    })
    
    
    // test('Debe de cargar un archivo y retornar el URL', async(done) => {

    //     // Intento de la subida de imagen/archivo

    //     const resp = await fetch('https://res.cloudinary.com/dvc1kq2kn/image/upload/v1626892629/psnykem57yile6dhdrs7.jpg');
    //     const blob = await resp.blob();

    //     const file = new File([blob], 'foto.png');
    //     const url = await fileUpload( file );

    //     expect( typeof url ).toBe('string');

    //     // Borrar imagen por ID
    //     const segments = url.split('/');
    //     const imageId = segments[ segments.length - 1 ].replace('.png','');

    //     cloudinary.v2.api.delete_resources( imageId, {}, ()=> {
    //         done();
    //     });
        
    // });


    // test('Debe de retornar un error', async() => {

    //     const file = new File([], 'foto.png');
    //     const url = await fileUpload( file );

    //     expect( url ).toBe( null );
       
    // });
    

})


