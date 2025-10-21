import React, { useState } from "react";

export default function FindPrimeNumbers() {
  const [numbers, setNumbers] = useState([2, 3, 4, 5, 10, 13, 17, 20]);
  const [inputValue, setInputValue] = useState("");
  const [primes, setPrimes] = useState([]);

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function findPrimes(arr) {
    return arr.filter(isPrime);
  }

  function handleFindPrimes() {
    const result = findPrimes(numbers);
    setPrimes(result);
  }

  function handleAddNumber() {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setInputValue("");
    }
  }

  return (
    <div style={styles.container}>
      <h2>Find Prime Numbers from Array</h2>

      <div style={styles.inputSection}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          style={styles.input}
        />
        <button onClick={handleAddNumber} style={styles.btn}>
          Add
        </button>
      </div>

      <div style={styles.arrayBox}>
        <strong>Array:</strong> [{numbers.join(", ")}]
      </div>

      <button onClick={handleFindPrimes} style={styles.btn}>
        Find Primes
      </button>

      {primes.length > 0 && (
        <div style={styles.resultBox}>
          Prime Numbers: <strong>[{primes.join(", ")}]</strong>
        </div>
      )}
      {primes.length === 0 && (
        <div style={styles.resultBox}>
          No prime numbers found.
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: 600, margin: "40px auto", fontFamily: "Arial", textAlign: "center" },
  inputSection: { marginBottom: 20 },
  input: { padding: "8px 10px", borderRadius: 6, border: "1px solid #ccc", width: 200, marginRight: 10 },
  btn: { padding: "8px 12px", borderRadius: 6, border: "none", background: "#0369a1", color: "white", cursor: "pointer" },
  arrayBox: { marginTop: 20, fontSize: 16 },
  resultBox: { marginTop: 20, fontSize: 18, color: "#0a6847", fontWeight: 600 },
};
