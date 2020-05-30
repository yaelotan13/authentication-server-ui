import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { canLogOut, isLoggedIn } from '../../service';
import { FeedPage, NotLoggedIn } from './components';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
}));

const Feed = (props) => {
    const classes = useStyle();
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const { location, history } = props;
    let userName = '';
    let firstTime = false;
    let capitalizedName = ''; 
    if (location.state) {
        userName = location.state.userName;
        firstTime = location.state.firstTime;
        capitalizedName = userName[0].toUpperCase() +  userName.slice(1); 
    }

    useEffect(() => {
        (async () => {
            const response = await isLoggedIn();
            console.log(response);
            if (response.loggedIn) {
                setUserIsLoggedIn(true);
            } 
        })();
    }, []);

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

    const handleMoveToLogIn = () => {
        props.history.push('/login');
    }

    return (
        <Box className={classes.container}>
            {userIsLoggedIn ?
                <FeedPage userName={capitalizedName} firstTime={firstTime} handleLogOut={handleLogOut} />
            :
            <NotLoggedIn handleClicked={handleMoveToLogIn} />}
        </Box>
    )
};

export default Feed;
