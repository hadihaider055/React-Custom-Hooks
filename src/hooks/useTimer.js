import { useState } from 'react'

const useTimer = () => {
    const [minutes, setminutes] = useState("00");
    const [seconds, setseconds] = useState("00");
    const [milliseconds, setmilliseconds] = useState("00");
    const [isOn, setisOn] = useState("false");
    const [intervalId, setIntervalId] = useState();


    const startTimer = () => {
        setisOn("true");
    };

    const stopTimer = () => {
        setisOn("false");
    };

    const resetTimer = () => {
        setisOn("false");
        setminutes("00");
        setmilliseconds("00");
        setseconds("00");
    };

    return {
        minutes,
        seconds,
        milliseconds,
        isOn,
        intervalId,
        setminutes,
        setseconds,
        setmilliseconds,
        setisOn,
        setIntervalId,
        startTimer,
        stopTimer,
        resetTimer
    }
}

export default useTimer
