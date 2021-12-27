const dotenv = require('dotenv');
const connectDB = require('./config/db')

dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    console.log('Uncaught Exception, Shutting down...');
    process.exit(1);
});
  
const app = require('./app');

//connecting Database
connectDB()
  
const port = process.env.PORT || 3000;
  
//Starting Server
const server = app.listen(port, '127.0.0.1', () => {
    console.log(`Server started on port: ${port}`);
});
  
// process.on('unhandledRejection', (err) => {
//     console.log(err.name, err.message);
//     console.log('Unhandled Rejection, Shutting down...');
//     server.close(() => {
//       process.exit(1);
//     });
// });