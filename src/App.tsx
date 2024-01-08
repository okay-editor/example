import './index.css'
import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TextEditor from './examples/text-editor'
import { OkayEditors } from './examples/okay-editor'

function App() {

    return <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TextEditor />} />
                <Route path="/okay" element={<OkayEditors />} />
            </Routes>
        </BrowserRouter>
    </div>

}

export default App