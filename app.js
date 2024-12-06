const fs = require('fs');

// Specify the file path
const filePath = 'secret.json';
let secret ;
// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    try {
        // Parse the file content and assign it to the variable
        secret = JSON.parse(data);
        console.log('JSON Object:', secret.test);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr.message);
    }
});