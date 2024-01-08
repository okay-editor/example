import './index.css'
import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TextEditor from './examples/text-editor'

function App() {

    return <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TextEditor />} />
            </Routes>
        </BrowserRouter>
    </div>

}

export default App