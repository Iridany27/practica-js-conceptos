const passwordResult = document.getElementById('passwordResult');
const generateBtn = document.getElementById('generateBtn');
const lengthInput = document.getElementById('lengthInput');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    let characters = letters;
    let password = "";
    const length = lengthInput.value;

    if (includeNumbers.checked) characters += numbers;
    if (includeSymbols.checked) characters += symbols;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordResult.innerText = password;
}

generateBtn.addEventListener('click', generatePassword);

// Generar una al cargar la página por primera vez
generatePassword();