export class InputData {
    constructor(placeholder, type, value, handleChanged, icon, whiteIcon, hasError, errorMessage) {
        this.placeholder = placeholder;
        this.type = type;
        this.value = value;
        this.handleChanged = handleChanged;
        this.icon = icon;
        this.whiteIcon = whiteIcon;
        this.hasError = hasError;
        this.errorMessage = errorMessage;
    }
}