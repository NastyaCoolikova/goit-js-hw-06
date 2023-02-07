const validInput = document.querySelector('#validation-input');
const dataLength = Number(validInput.dataset.length);
const changeColorBorder = (event) => {
    if (event.target.value.length === dataLength) {
        validInput.classList.add('valid');
        validInput.classList.remove('invalid');
    } else {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    }
};

validInput.addEventListener('blur', changeColorBorder);