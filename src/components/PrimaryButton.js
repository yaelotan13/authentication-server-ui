import React from 'react';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    }
}));

const PrimaryButton = (props) => {
    const classes = useStyle();
    const { title, onClick } = props;

    return (
        <Button 
            color="primary" 
            variant="contained" 
            className={classes.button}
            onClick={onClick}
        >
                {title}
        </Button>
    )
};

export default PrimaryButton;