const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hey there, this is version 2');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});