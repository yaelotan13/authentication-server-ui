import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Icon } from '../../components';
import logOut from '../../assetes/icons/logout.png';
import { canLogOut } from '../../service';

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
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h4.fontSize,
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
    }
}));

const Feed = (props) => {
    const classes = useStyle();
    const { location, history } = props;
    let userName = 'somebody';
    let firstTime = false;
    if (location.state) {
        userName = location.state.userName;
        firstTime = location.state.firstTime;
    }
    const capitalizedName = userName[0].toUpperCase() +  userName.slice(1); 

    console.log(firstTime);
    const handleLogOut = async () => {
        try {
            const loggedOut = await canLogOut();
            if (loggedOut) {
                history.push('/login')
            }
        } catch (error) {
            console.log('error occured');
        }
    }

    const getSubTitle = () => firstTime ? "It's your first time seeing the dancing robot!" : "Did you miss the dancing robot?";
    const getTitle = () => firstTime ? `WOW ${capitalizedName}, you made it in!` : `WOW ${capitalizedName}, you made it in again!`;

    return (
        <Box className={classes.container}>
            <Typography className={classes.title}>{getTitle()}</Typography>
            <Typography className={classes.subTitle}>{getSubTitle()}</Typography>
            <Box className={classes.logOutContainer} onClick={handleLogOut}>
                <Icon icon={logOut} />
                <Typography className={classes.logOut}>Log Out</Typography>
            </Box>
            <Box className={classes.gif}>
                <iframe title="dancing GIF" src="https://giphy.com/embed/mIZ9rPeMKefm0" width="344" height="480" frameBorder="0" allowFullScreen></iframe>
            </Box>
        </Box>
    )
};

export default Feed;
