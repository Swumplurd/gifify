import { useState } from 'react'
import { AddCategory } from '../AddCategory/AddCategory';
import { GifGrid } from '../GifGrid/GifGrid';

export const Gifify = () => {
    const [categories, setCategories] = useState(['Demon Slayer']);

    return (
        <>
            <h2>Gifify</h2>
            <hr/>
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