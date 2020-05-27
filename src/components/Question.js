import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    questionConatiner: {
        display: 'flex',
        marginTop: '1vh'
    },
    question: {
    },
    action: {
        marginLeft: 6,
        color: theme.palette.secondary.main,
        cursor: 'pointer'
    }
}));

const Question = (props) => {
    const classes = useStyle();
    const { question, action, onAction } = props;

    return (
        <Box className={classes.questionConatiner}>
            <Typography className={classes.question}>{question}</Typography>
            <Box onClick={onAction}>
                <Typography className={classes.action}>{action}</Typography>
            </Box>
        </Box>
    );
};

export default Question;
