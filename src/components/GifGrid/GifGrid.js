export const GifGrid = ({category}) => {
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=SSU4rxb9RPFUuGbxhXDXrS8VAcPmrDo4&limit=5`;
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })

        console.log(gifs)
    }

    getGifs();
    return (
        <>
            <h3>{category}</h3>
        </>
    )
}