export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=SSU4rxb9RPFUuGbxhXDXrS8VAcPmrDo4&limit=6`;
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

    return gifs;
}