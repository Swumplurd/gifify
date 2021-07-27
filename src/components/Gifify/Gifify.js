import { useState } from 'react'

export const Gifify = () => {
    const [categories, setCategories] = useState(['Demon Slayer', 'Rick and Morty', 'Ghibli']);

    const handleAdd = () => {
        setCategories(['Hola', ...categories])
    }

    return (
        <>
            <h2>Gifify</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return (
                            <li key={category}>{category}</li>
                        )
                    })
                }
            </ol>
        </>
    )
}