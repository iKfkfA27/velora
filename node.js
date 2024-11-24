const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));  // Serve static files

app.post('/create-file', (req, res) => {
    const filePath = path.join(__dirname, 'save', 'newfile.txt');  // Define path for the new file
    const content = 'This is the content of the newly created file.';
    
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return res.status(500).send('Error creating file');
        }
        res.send('File created successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
