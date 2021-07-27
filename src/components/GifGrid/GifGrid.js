import {useEffect, useState} from "react";
import { GridItem } from "../GridItem/GridItem";

export const GifGrid = ({category}) => {

    const [gif, setGif] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=SSU4rxb9RPFUuGbxhXDXrS8VAcPmrDo4&limit=6`;
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url,
                date: gif.import_datetime
            }
        })

        setGif(gifs)
    }

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