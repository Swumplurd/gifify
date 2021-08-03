import { getGifs } from "./getGifs"

describe('Pruebas en getGifs fetch', () => {
    test('Deberia traer un arreglo con 6 gifs', async () => {
        const gifs = await getGifs('morty');
        expect(gifs.length).toBe(6)
    })

    test('Deberia traer un arreglo con 0 gifs', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
    })
})
