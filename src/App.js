import React from 'react';
import './App.css';
import RomanConverter from "./components/RomanConverter";
import ArabicConverter from "./components/ArabicConverter";
import RomanNumbersAdder from "./components/RomanNumbersAdder";

function App() {
    return (
        <>
            <RomanConverter/>
            <ArabicConverter/>
            <RomanNumbersAdder/>
        </>
    );
}

export default App;
