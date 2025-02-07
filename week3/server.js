const express = require('express');
const socketio = require('socket.io');
const app = express();
const SERVER_PORT = 3001;

const server = app.listen(SERVER_PORT, () => {
    console.log('Chat server running on http://localhost:3001')
});

//http:localhost:3000/
app.get("/", (req,res) => {
    res.sendFile(__dirname + '/vies/chat.html')

});

const io = socketio(server);

io.on('connection', (socket) => {
    console.log(`New Socket: ${socket.id}`)
    soxket.on('disocnnect', ()=>{
        console.log(`User disconected ${socket.id}`)

    })
})