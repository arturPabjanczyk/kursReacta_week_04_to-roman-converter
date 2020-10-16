import React from 'react';
import './App.css';
import RomanConverter from "./components/RomanConverter";
import ArabicConverter from "./components/ArabicConverter";

function App() {
    return (
        <>
            <RomanConverter/>
            <ArabicConverter/>
        </>
    );
}

export default App;
