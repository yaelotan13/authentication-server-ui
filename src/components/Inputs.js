import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Input } from './index';

const useStyle = makeStyles((theme) => ({
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10vh',
            width: '100vw',
        }, 
    },
}));

const Inputs = (props) => {
    const classes = useStyle();
    const { inputs } = props;

    return (
        <Box className={classes.inputsContainer}>
            {inputs.map(input => 
                <Input 
                    key={input.key}
                    placeholder={input.placeholder}
                    id={input.id}
                    value={input.value} 
                    handleChange={input.handleChanged}
                    icon={input.icon} 
                    type={input.type}
                    whiteIcon={input.whiteIcon} 
                    hasError={input.hasError}
                    errorMessage={input.errorMessage}
                />
            )}
        </Box>
    )
};

export default Inputs;
