import { shallow } from "enzyme";
import { AddCategory } from "./AddCategory";

describe('Pruebas en el componente AddCategory', () => {
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('Debe de coincidir con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de cambiar el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola Prro'

        input.simulate('change', {target: { value: value }})
        expect(wrapper.find('p').text()).toBe(value)
    })

    test('Se espera que no se postee informacion en el evento submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar setCategories y limpiar la caja de texto', () => {
        const value = 'Hola'

        const input = wrapper.find('input');
        input.simulate('change', {target: { value: value }})

        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}})

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
    
    
})
