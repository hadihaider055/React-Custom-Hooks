import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import ReplayIcon from "@material-ui/icons/Replay";

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            width: "110px",
        },
    })
);


const TimerButton = ({ buttonAction, buttonValue }) => {
    const classes = useStyles();

    return (
        <div className="timerbutton">
            <Button
                variant="contained"
                data-testid={buttonValue}
                type="button"
                onClick={() => buttonAction()}
                className={classes.button}
                id={buttonValue}
                startIcon={
                    buttonValue === "Start" ? (
                        <PlayCircleFilledIcon />
                    ) : buttonValue === "Stop" ? (
                        <PauseCircleFilledIcon />
                    ) : (
                        <ReplayIcon />
                    )
                }
            >
                {buttonValue}
            </Button>
        </div>
    );
};

export default TimerButton;