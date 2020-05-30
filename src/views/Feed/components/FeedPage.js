import React, { Fragment } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Icon } from '../../../components';
import logOut from '../../../assetes/icons/logout.png';

const useStyle = makeStyles((theme) => ({
    title: {
        fontSize: theme.typography.h1.fontSize,
        fontFamily: theme.typography.h1.fontFamily, 
        marginTop: '5vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h3.fontSize,
        }, 
    },
    subTitle: {
        marginTop: '5vh',
        fontFamily: theme.typography.h1.fontFamily, 
        fontSize: theme.typography.h5.fontSize,
        [theme.breakpoints.down('sm')]: {
            marginTop: '2vh',
            fontSize: theme.typography.h6.fontSize,
        }, 
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
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h6.fontSize,
            marginLeft: 4
        }, 
    },
    gif: {
        marginTop: '10vh',
        height: '60vh',
        width: '60vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

const FeedPage = (props) => {
    const classes = useStyle();
    const { userName, handleLogOut, firstTime } = props;

    const getSubTitle = () => firstTime ? "It's your first time seeing the dancing robot!" : "Did you miss the dancing robot?";
    const getTitle = () => firstTime ? `WOW ${userName}, you made it in!` : `WOW ${userName}, you made it in again!`;
    return (
        <Fragment>
            <Typography className={classes.title}>{getTitle()}</Typography>
            <Typography className={classes.subTitle}>{getSubTitle()}</Typography>
            <Box className={classes.logOutContainer} onClick={handleLogOut}>
                <Icon icon={logOut} />
                <Typography className={classes.logOut}>Log Out</Typography>
            </Box>
            <Box className={classes.gif}>
                <iframe title="dancing GIF" src="https://giphy.com/embed/mIZ9rPeMKefm0" width="344" height="480" frameBorder="0" allowFullScreen></iframe>
            </Box>
        </Fragment>
    )
};

export default FeedPage;
