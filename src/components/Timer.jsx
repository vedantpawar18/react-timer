import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);
    
    useEffect(() =>{
        return stopTimer;
    }, []);

    const startTimer = () => {
        if (timerRef.current!==null) return;
        timerRef.current= setInterval(() =>{
            setCount((count) => count+1);
        },1000);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current=null;
    };

    const resetTimer= () =>{
        stopTimer();
        setCount(0);
    };
  return (
    <div>
        <h1>Timer : {count}</h1>
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default Timer