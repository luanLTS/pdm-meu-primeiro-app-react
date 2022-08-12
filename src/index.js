import React from 'react';
import ReactDOM  from 'react-dom';

import './index.css';

const App = () => {

    const buttonStyle = {
        marginTop: 12,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: 'blueviolet',
        color: 'white',
        border: 'none',
        width: '100%',
        borderRadius: 8,
        cursor: "pointer"
    }

    const textLabel = 'Nome:';

    const getTextButton = () => "Enviar"

    return ( // devolve a representacao grafica do componente app
        <div 
            style={{
                margin: 'auto',
                width: 768,
                backgroundColor: '#eee',
                padding: 12,
                borderRadius: 8
            }}
        >
        <label
        className='rotulo'
            htmlFor='nome'
            style={{
                display: 'block',
                marginBotton: 4
            }}
        >
            {textLabel}
        </label>
        <input
            type="text"
            id='nome' 
            style={{
                paddingTop: 8,
                paddingBottom: 8,
                borderStyle: 'hidden',
                outline: 'none',
                width: '100%',
                borderRadius: 8,
            }}    
        />
            <button
                style={buttonStyle}
            >
                {getTextButton()}
            </button>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)