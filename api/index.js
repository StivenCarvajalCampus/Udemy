import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

// app.listen(5015)
// console.log('server is runing on port 3000');

let PORT = JSON.parse(process.env.VITE_PORT_BACKEND)
let HOSTNAME = JSON.parse(process.env.VITE_HOSTNAME)
app.listen(PORT, ()=>{
  console.log(`http://${HOSTNAME}:${PORT}`)
})