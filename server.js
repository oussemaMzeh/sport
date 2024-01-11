//import app fr
const { log } = require('console')
const app = require('./backend/app')

app.listen(3000, () => {
    console.log('express app is listening on port 3000');
})