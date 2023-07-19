import React, { useState } from "react";
import Button from "./Button";
import '../styles/calculator.css';
import '../styles/button.css';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setResult((prevResult) => prevResult + value);
    };

    const handleClear = () => {
        setResult('');
    };

    const handleEquals = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };
    const handlePercentage = () => {
        try {
            setResult((parseFloat(result) / 100).toString());
        } catch (error) {
            setResult('Error');
        }
    };
    const handleBackspace = () => {
        setResult((prevResult) => prevResult.slice(0, -1));
    };

    const handleDecimal = () => {
        if (!result.includes('.')) {
            setResult((prevResult) => prevResult + '.');
        }
    };
    return (
        <div className="calculator">
            <div className="display">{result}</div>
            <div className="buttons">
            <Button label="AC" handleClick={handleClear} />
            <Button label="←" handleClick={handleBackspace} />
            <Button label="%" handleClick={handlePercentage} />
            <Button label="/" handleClick={handleClick} />
            <Button label="7" handleClick={handleClick} />
            <Button label="8" handleClick={handleClick} />
            <Button label="9" handleClick={handleClick} />
            <Button label="*" handleClick={handleClick} />
            <Button label="4" handleClick={handleClick} />
            <Button label="5" handleClick={handleClick} />
            <Button label="6" handleClick={handleClick} />
            <Button label="-" handleClick={handleClick} />
            <Button label="1" handleClick={handleClick} />
            <Button label="2" handleClick={handleClick} />
            <Button label="3" handleClick={handleClick} />
            <Button label="+" handleClick={handleClick} />
            <Button label="0" handleClick={handleClick} />
            <Button label="." handleClick={handleDecimal} />
            <Button label="=" handleClick={handleEquals} />
            </div>
        </div>
    );
}

export default Calculator;