import {GridItem} from './GridItem';
import {shallow} from 'enzyme';

describe('Pruebas en GridItem', () => {
    const title = 'Hola';
    const url = 'https://www';
    const date = '2015-12-12'
    const wrapper = shallow(<GridItem title={title} url={url} date={date} />)

    test('Debe mostrar GridItem correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })  

    test('Debe de tener la img con las propiedades src y alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(url)
    })

    test('la etiqueta small debe contener la clase test-mutted', () => {
        const small = wrapper.find('small')
        expect(small.prop('className')).toBe('text-muted')
        expect(small.prop('className').includes('text-muted')).toBe(true)
    })
    
    
})