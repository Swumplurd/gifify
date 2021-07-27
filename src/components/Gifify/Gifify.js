import { useState } from 'react'
import { AddCategory } from '../AddCategory/AddCategory';
import { GifGrid } from '../GifGrid/GifGrid';

export const Gifify = () => {
    const [categories, setCategories] = useState(['Demon Slayer']);

    return (
        <>
            <div className="p-5 my-4 bg-dark bg-gradient shadow-lg text-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Gifify</h1>
                    <p className="col-md-8 fs-4">Generamos peticiones http a la API de GIPHY mediante el input situado debajo... para mas informacion acerca de la API dar click en el siguiente boton...</p>
                    <a className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer" href="https://developers.giphy.com/">API GIPHY</a>
                </div>
            </div>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category => {
                        return (
                            <GifGrid key={category} category={category}/>
                        )
                    })
                }
            </ol>
        </>
    )
}