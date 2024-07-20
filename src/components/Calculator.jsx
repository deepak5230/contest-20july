import React,{useState} from 'react';


function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
  
    const validateInputs = () => {
      if (num1 === '' || num2 === '') {
        setError('Inputs cannot be empty.');
        return false;
      }
      if (isNaN(num1) || isNaN(num2)) {
        setError('Inputs must be valid numbers.');
        return false;
      }
      setError('');
      return true;
    };
  
    const handleAddition = () => {
      if (validateInputs()) {
        setResult(parseFloat(num1) + parseFloat(num2));
      }
    };
  
    const handleSubtraction = () => {
      if (validateInputs()) {
        setResult(parseFloat(num1) - parseFloat(num2));
      }
    };
  
    const handleMultiplication = () => {
      if (validateInputs()) {
        setResult(parseFloat(num1) * parseFloat(num2));
      }
    };
  
    const handleDivision = () => {
      if (validateInputs()) {
        if (parseFloat(num2) === 0) {
          setError('Division by zero is not allowed.');
        } else {
          setResult(parseFloat(num1) / parseFloat(num2));
        }
      }
    };
  
    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <div className="buttons">
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
          <button onClick={handleDivision}>/</button>
        </div>
        {error && <div className="error">{error}</div>}
        {result && !error && <div className="result">Result: {result}</div>}
      </div>
    );
  }
  
  export default Calculator;