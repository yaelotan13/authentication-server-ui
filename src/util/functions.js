import { errorMessages } from './errorMessages';

export class InputData {
    constructor(key, placeholder, id, type, value, handleChanged, icon, whiteIcon, hasError, errorMessage) {
        this.key = key;
        this.placeholder = placeholder;
        this.id = id;
        this.type = type;
        this.value = value;
        this.handleChanged = handleChanged;
        this.icon = icon;
        this.whiteIcon = whiteIcon;
        this.hasError = hasError;
        this.errorMessage = errorMessage;
    }
}

export const validInputs = (state, setState) => {
    const inputs = Object.keys(state);
    let valid = true;

    for (let input of inputs) {
        if (state[input].value.length < 1) {
            valid = false;
            console.log(input);

            setState(prevState => {
                const updatedInput = { ...prevState[input] };
                updatedInput.hasError = true;
                updatedInput.errorMessage = errorMessages.emptyError;
    
                return {
                    ...prevState, 
                    [input]: updatedInput
                }
            })
        }
        if (input === 'confirmPassword') {
            if (state[input].value !== state.password.value) {
                valid = false;
                setState(prevState => {
                    const updatedInput = { ...prevState[input] };
                    updatedInput.hasError = true;
                    updatedInput.errorMessage = errorMessages.passwordError;
        
                    return {
                        ...prevState, 
                        [input]: updatedInput
                    }
                })
            }
        }
    }

    return valid;
}

export const setError = (setState, filed, errorMessage) => {
    setState(prevState => {
        const updatedState = { ...prevState[filed] };
        updatedState.hasError = true;
        updatedState.errorMessage = errorMessage;

        return {
            ...prevState, 
            [filed]: updatedState
        }
    })
}
