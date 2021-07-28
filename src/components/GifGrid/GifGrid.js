import {useEffect, useState} from "react";
import { getGifs } from "../../helpers/getGifs";
import { GridItem } from "../GridItem/GridItem";

export const GifGrid = ({category}) => {

    const [gif, setGif] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then( gifs => setGif(gifs))
    }, [category]);

    return (
        <>
            <h3 className="text-center mt-5 text-uppercase">{category}</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    gif.map(item => {
                        return <GridItem key={item.id} {...item} />
                    })
                }
            </div>
        </>
    )
}