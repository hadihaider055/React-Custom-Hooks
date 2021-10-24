import React, { useEffect } from "react";
import useTimer from '../../hooks/useTimer'
import TimerButton from "../Timer Button";

const Timer = () => {

    const { minutes,
        seconds,
        milliseconds,
        isOn,
        setminutes,
        setseconds,
        setmilliseconds,
        setIntervalId,
        startTimer,
        stopTimer,
        resetTimer } = useTimer()

    useEffect(() => {

        var count1 = +milliseconds;
        var count2 = +seconds;
        var count3 = +minutes;

        if (isOn === "true") {
            const id = setInterval(() => {
                if (+count1 < 60) {
                    count1++;
                    +count1 < 10
                        ? setmilliseconds("0" + count1)
                        : setmilliseconds(count1.toString());
                } else {
                    count1 = 0;
                    setmilliseconds("00");
                    if (+seconds <= 59) {
                        count2++;
                        count2 < 10
                            ? setseconds("0" + count2)
                            : setseconds(count2.toString());
                    } else {
                        setseconds("00");
                        count2 = 0;
                        count3++;
                        count3 < 10
                            ? setminutes("0" + count3)
                            : setminutes(count3.toString());
                    }
                }
            }, 10);

            setIntervalId(id);

            return () => clearInterval(id);
        }
    }, [isOn, seconds, milliseconds, minutes, setminutes, setseconds, setmilliseconds, setIntervalId,]);

    return (
        <div className="timer">
            <h1>Timer Application</h1>

            <h2 className="TimeDisplay">
                <span data-testid="minute">{minutes}</span>:
                <span data-testid="second">{seconds}</span>:
                <span data-testid="millisecond">{milliseconds}</span>
            </h2>

            <div className="AllButtons">
                <TimerButton buttonAction={startTimer} buttonValue="Start" />
                <TimerButton buttonAction={stopTimer} buttonValue="Stop" />
                <TimerButton buttonAction={resetTimer} buttonValue="Reset" />
            </div>

            <p data-testid="isOn" className="hideit">
                {isOn}
            </p>
        </div>
    )
}

export default Timer
