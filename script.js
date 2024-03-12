const validateSyntax = () => {
    const input = document.getElementById('petInput').value;
    const isValid = /^pet_[a-zA-Z0-9]+$/.test(input);

    let resultText = isValid ? 'Valid Syntax' : 'Invalid Syntax';
    let resultIcon = isValid ? '✅' : '❌';
    let resultColor = isValid ? 'green' : 'red';

    document.getElementById('result').innerText = resultText;
    document.getElementById('result').style.color = resultColor;
    document.getElementById('resultIcon').innerText = resultIcon;
    document.getElementById('resultIcon').style.color = resultColor;
};