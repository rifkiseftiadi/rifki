'use client';

import { useState } from 'react';
import styles from "./kalkulatorPage.module.css"

export default function kalculator() {
  const [input, setInput] = useState(''); // Untuk menampung input pengguna

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value); // Menambahkan angka atau operator ke input
  };

  function handleClear() {
        setInput(''); // Menghapus input
    }

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Menjalankan operasi matematika menggunakan eval (hati-hati dengan input dari user)
    } catch (error) {
      setInput('Error'); // Menampilkan error jika ada kesalahan dalam operasi
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}
