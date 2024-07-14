// const app = require('./app')
// const serverless = require('vercel-serverless');
// const PORT = process.env.PORT || 4001;

// app.listen(PORT)
// console.log('Servidor corriendo en el puerto:', PORT)


// module.exports = serverless(app);


const app = require('./app')

const PORT = process.env.PORT || 4001;

app.listen(PORT)
console.log('Servidor corriendo en el puerto:', PORT)