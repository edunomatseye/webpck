import React from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'

import './styles.css'
import Home from './Home'
import Counter from './counter'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Link to="/home">Home</Link>
                <br />
                <Link to="/counter">Counter</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
