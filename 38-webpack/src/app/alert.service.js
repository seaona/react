import { inputsAreValid } from "./utils/inputs-are-valid";

export class AlertService {
    constructor() {
        this.errorBox = document.getElementById("error");
    }

    handleAdditionError(inputs, numbers) {
        const fullMessage = inputs.reduce((message, str, index) => {
            if(inputsAreValid(numbers[index])) {
                return message;
            } else {
                return `${message} ${str} is not a valid number. `;
            }
            }, "please enter 2 valid numbers");
        this.errorBox.classList.remove("invisible");
        this.errorBox.innerHTML = fullMessage;
    }

    hideErrors() {
        this.errorBox.classList.add("invisible");
    }
};