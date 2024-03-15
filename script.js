const validateSyntax = () => {
    const input = document.getElementById('petInput').value.trim();
    const isValid = /^pet_[a-zA-Z0-9]+$/.test(input);
    
    // Set the text and color based on validity
    const result = isValid ? 'Valid Syntax 🟢' : 'Invalid Syntax 🔴';
    const color = isValid ? 'green' : 'red';
    
    // Update the content and color of the element with the id 'result'
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    resultElement.style.color = color;
};
