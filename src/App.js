import { Fragment } from "react/cjs/react.production.min"
import "./main.scss"
import Header from "./components/Header"
import Characters from "./components/Characters"
import './components/Header.css'

function App() {
    return (
        <Fragment>
            <Header 
                title="Rick and Morty API"
            />
            <Characters />
        </Fragment>
    )
}

export default App