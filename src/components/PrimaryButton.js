import React from 'react';
import { Button, CircularProgress, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    button: {
        width: '15vw',
        height: '7vh',
        borderRadius: 50,
        backgroundColor: theme.palette.warning.main,
        [theme.breakpoints.down('sm')]: {
            marginTop: '6vh',
            width: '45vw',
        }, 
        '&:hover': {
            opacity: 0.7
        }
    },
    spinner: {
        color: 'white',
    }
}));

const PrimaryButton = (props) => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSmallDevices = useMediaQuery(theme.breakpoints.down('sm'));
    const { title, onClick, loading } = props;

    return (
        <Button 
            color="primary" 
            variant="contained" 
            className={classes.button}
            onClick={onClick}
        >
                {loading ? 
                <CircularProgress 
                    className={classes.spinner} 
                    size={matchesSmallDevices ? 20 : 30} 
                /> 
                : 
                title}
        </Button>
    )
};

export default PrimaryButton;