import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
    return ( // devolve a representacao grafica do componente app
        <div>
            meu primeiro componente React JS
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)