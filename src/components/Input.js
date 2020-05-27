import React from 'react';
import { TextField, InputAdornment, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';

import { Icon } from '.';

const useStyle = makeStyles((theme) => ({
    input: {
        width: '35vw',
        marginBottom: '3vh',
        borderRadius: 5,
        [theme.breakpoints.down('sm')]: {
            width: '70vw',
            backgroundColor: 'rgba(0,0,0,0.3)',
        }, 
    },
    error: {
        [theme.breakpoints.down('sm')]: {
            // TODO fix padding bottom
        },   
    },
    whiteColor: {
        color: 'white'
    },
    darkColor: {
        color: 'black'
    }
}));

const Input = (props) => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSmallDevices = useMediaQuery(theme.breakpoints.down('sm'));
    const { placeholder, icon, whiteIcon, errorMessage, hasError, value, handleChange, type } = props;

    return (
        <TextField
            error={hasError}
            className={hasError ? [classes.input, classes.error].join(' ') : classes.input}
            value={value}
            onChange={handleChange}
            variant="filled"
            placeholder={placeholder}
            color="secondary"
            type={type}
            helperText={hasError ? errorMessage : null}
            InputProps={{
                className: matchesSmallDevices ? classes.whiteColor : classes.darkColor,
                startAdornment: (
                    <InputAdornment position="start">
                        <Icon icon={matchesSmallDevices ? whiteIcon : icon} />
                    </InputAdornment>
                ),
            }}
        />
    )
};

export default Input;