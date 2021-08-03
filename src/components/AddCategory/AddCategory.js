import {useState} from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {            
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <p>{inputValue}</p>
                <label htlmfor="categorias" className="form-label">Buscar Categorias</label>
                <input type="text" value={inputValue} onChange={handleInputChange} className="form-control shadow" id="categorias" aria-describedby="categoriasHelp"/>
                <div id="categoriasHelp" className="form-text">Ingresa el nombre de una nueva categoria...</div>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}