import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
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
            htmlFor='nome'
            style={{
                display: 'block',
                marginBotton: 4
            }}
        >
            Nome:
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
                style={{
                    marginTop: 12,
                    paddingTop: 8,
                    paddingBottom: 8,
                    backgroundColor: 'blueviolet',
                    color: 'white',
                    border: 'none',
                    width: '100%',
                    borderRadius: 8,
                    cursor: "pointer"
                }}
            >
                Enviar
            </button>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)