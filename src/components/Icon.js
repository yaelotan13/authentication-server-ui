import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    icon: {
        width: 30, 
        height: 30,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
}));

const Icon = (props) => {
    const classes = useStyle();
    const { icon } = props;

    return <Box style={{ backgroundImage: `url(${icon}`}} className={classes.icon} />
};

export default Icon;
