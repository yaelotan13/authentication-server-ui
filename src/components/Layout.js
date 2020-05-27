import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import beach from '../assetes/images/beach.jpg';
import { PrimaryButton, Question } from './index';

const useStyle = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex'
    },
    img: {
        backgroundImage: `url(${beach})`,
        width: '50vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            backgorundPosition: 'right',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50vw',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            position: 'absolute',
            top: 80,
            backgroundColor: 'rgba(230, 230, 230, 0.85)',
            borderRadius: 5,
            marginLeft: '5vw'
        },
    },
    separator: {
        height: '10vh'
    },
    title: {
        fontSize: theme.typography.h1.fontSize,
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.h2.fontSize,
        }, 
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const Layout = (props) => {
    const classes = useStyle();
    const { children, title, buttonTitle, handleSubmit, question, action } = props;

    return (
        <Box className={classes.container}>
            <Box className={classes.img} />
            <Box className={classes.content}>
                <Box className={classes.separator} />
                <Typography className={classes.title}>{title}</Typography>
                {children}
                <Box className={classes.buttonContainer}>
                    <PrimaryButton title={buttonTitle} onClick={handleSubmit} />
                    <Question question={question} action={action} />
                </Box>
                <Box className={classes.separator} />
            </Box>
        </Box>
    )
};

export default Layout;
