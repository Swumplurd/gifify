import { useState } from 'react'
import { AddCategory } from '../AddCategory/AddCategory';

export const Gifify = () => {
    const [categories, setCategories] = useState(['Demon Slayer', 'Rick and Morty', 'Ghibli']);

    return (
        <>
            <h2>Gifify</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
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