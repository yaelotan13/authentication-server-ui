import React, { Fragment } from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { PrimaryButton } from '../../../components';
import robot from '../../../assetes/images/robot.jpg';

const useStyle = makeStyles((theme) => ({
    img: {
        backgroundImage: `url(${robot})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '80vw',
        height: '60vh',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '50vh',
        }, 
    },
    title: {
        marginBottom: '5vh',
        fontSize: theme.typography.h5.fontSize,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h6.fontSize,
            marginBottom: 0
        },
    }
}));

const NotLoggedIn = (props) => {
    const classes = useStyle();
    const { handleClicked } = props;

    return (
        <Fragment>
            <Box className={classes.img} />
            <Typography className={classes.title}>You need to be logged in to view this page</Typography>
            <PrimaryButton title="Log In" onClick={handleClicked} />
        </Fragment>
    )
};

export default NotLoggedIn;
