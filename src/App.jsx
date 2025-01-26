import React, { useState } from "react";
import './index.css';

export default function App() {
  const [number, setNumber] = useState(''); //this is to set the input number
  const [isPrime, setIsPrime] = useState(false);//this is to know whether the input number is prime or not 
  const [factorial, setFactorial] = useState(false); //this if to know the facorial of the input number
  const [popUpMessage, setPopUpMessage] = useState(false); //this is for the pop up message for success submission 
  const [invalidMessage, setInvalidMessage] = useState(false); //this is for the invalid message


  // this function checks whether a number is prime or not
  const primeOrNot = (num) => {
    if (num < 2) 
      return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  };

  // this function checks the factorial of the input number
  const checkFactorial = (num) => {
    if (num < 0) 
      return null; //this is to check if the input number is negative numbers and it will throw a message of undefined
    let resultFactorial = 1;
    for (let i = 2; i <= num; i++) {
      resultFactorial *= i;
    }
    return resultFactorial;
  };

  // this function handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number, 10);
    if (isNaN(num)) {
      setInvalidMessage(true);//this will trigger the pop up message for invalid message
      return;
    }
    setPopUpMessage(true); //this will trigger the pop up message for the output of the input number
    setIsPrime(primeOrNot(num));//this is to check if the input number is prime
    setFactorial(checkFactorial(num));//this will calculate the factorial of the input number
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-700 p-5">
      <div className="bg-slate-500 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto p-5 rounded flex flex-col justify-center items-center">
        <h1 className="text-center text-xl md:text-2xl mb-5 text-white">Prime Or Not?</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="text-white w-full text-center mb-3">
            Enter a number:
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full sm:w-60 h-10 rounded mt-2 ml-2 text-black p-2"
            />
          </label>
          <button type="submit" className="bg-white rounded p-2 w-32 sm:w-24 text-center mt-2">
            Analyze
          </button>
        </form>

        {/*this is the pop up message output for the success submission */}
        {popUpMessage && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5">
            <div className="bg-white w-full sm:w-96 p-5 rounded flex flex-col items-center">
              {isPrime !== null && (
                <div className="mt-5 text-center">
                  <p className="mb-3">
                    <strong>Prime Status:</strong> {isPrime ? 'Yes, it is prime!' : 'No, it is not prime.'}
                  </p>
                  <p className="w-48 overflow-hidden text-ellipsis whitespace-nowrap">
                    <strong>Factorial:</strong> {factorial !== null ? factorial.toLocaleString() : 'Not defined'}
                  </p>
                </div>
              )}
              <button onClick={() => setPopUpMessage(false)} className="bg-gray-500 p-2 rounded mt-5 w-28 text-white">
                Close
              </button>
            </div>
          </div>
        )}

        {/*this is the pop up invalid message */}
        {invalidMessage && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5">
            <div className="bg-white w-full sm:w-72 h-auto p-5 rounded flex flex-col items-center">
              <p className="text-lg text-center">
                Please enter a <span className="text-red-600">valid</span> number
              </p>
              <button onClick={() => setInvalidMessage(false)} className="bg-gray-500 p-2 rounded mt-5 w-28 text-white">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
