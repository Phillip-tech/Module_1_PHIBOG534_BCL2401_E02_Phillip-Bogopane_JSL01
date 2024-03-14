const validateSyntax = () => {
    const input = document.getElementById('petInput').value.trim();
    const result = /^pet_[a-zA-Z0-9]+$/.test(input) ? 'Valid Syntax 🟢' : 'Invalid Syntax 🔴';
    document.getElementById('result').innerHTML = result;
};
