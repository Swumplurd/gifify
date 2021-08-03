import { shallow } from "enzyme"
import { Gifify } from "./Gifify"

describe('Pruebas en el componente Gifify', () => {
    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallow(<Gifify />)
        expect(wrapper).toMatchSnapshot()
    })
    
})
