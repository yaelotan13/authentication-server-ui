import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Icon } from '../../components';
import logOut from '../../assetes/icons/logout.png';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    title: {
        fontSize: theme.typography.h1.fontSize,
        fontFamily: theme.typography.h1.fontFamily, 
        marginTop: '5vh',
    },
    gif: {
        marginTop: '10vh',
        height: '60vh',
        width: '60vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logOutContainer: {
        marginTop: '3vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    logOut: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h5.fontSize,
        fontFamily: theme.typography.h1.fontFamily, 
    }
}));

const Page = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Typography className={classes.title}>WOW! you made it in</Typography>
            <Box className={classes.logOutContainer}>
                <Icon icon={logOut} />
                <Typography className={classes.logOut}>Log Out</Typography>
            </Box>
            <Box className={classes.gif}>
                <iframe title="dancing GIF" src="https://giphy.com/embed/mIZ9rPeMKefm0" width="344" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </Box>
        </Box>
    )
};

export default Page;
