const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    console.log('baongoc')
    next();
})

app.use((req, res, next) => {
    res.send('<h1>Hello world!</h1>');
})


app.listen(PORT, () => console.log("Server is running on port 3000"));
