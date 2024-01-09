import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Editor } from './pages/editor'

function App() {

    return <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Editor />} />
            </Routes>
        </BrowserRouter>
    </div>

}

export default App