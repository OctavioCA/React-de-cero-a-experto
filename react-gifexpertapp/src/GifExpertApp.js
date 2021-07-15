import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Samurai Champloo']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Carole & Tuesday'] );
    //     setCategories( cats => [ ...cats, 'Carole & Tuesday' ] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    )
};
