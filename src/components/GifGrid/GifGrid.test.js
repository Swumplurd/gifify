import { shallow } from "enzyme"
import { GifGrid } from "./GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente GifGrid', () => {
    test('Debe hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const category = 'Morty'
        const wrapper = shallow(<GifGrid key={category} category={category}/>);
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar items cuando carga useFetchGifs', () => {
        const gifs = [{
            id: 123,
            title: 'Mory Malvado',
            url: 'https://www.img.gif',
            date: 121212
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const category = 'Morty'
        const wrapper = shallow(<GifGrid key={category} category={category}/>);
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GridItem').length).toBe(gifs.length)
    })
    
    
})
