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

const errorMessages = {
    emptyError: 'Please fill out this field',
    passwordError: 'The password is not currect',
}

export const invalidInputs = (state, setState) => {
    const inputs = Object.keys(state);
    let hasError = false;

    for (let input of inputs) {
        console.log(input);
        if (state[input].value.length < 1) {
            hasError = true;

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
            hasError = true;
            if (state[input].value !== state.password.value) {
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

    return hasError;
}
