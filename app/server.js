const express = require("express")
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(5000, () => {
  console.log('server running on http://localhost:5000')
})

const SerialName = "/dev/cu.wchusbserial1410" //1420
const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort( SerialName, {
  baudRate: 9600
});
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

port.on('open', function () {
  console.log('connection is opened');
});

parser.on('data', function (data) {
  console.log(data)
  io.emit('card', {
    data: data
  }); // This will emit the event to all connected sockets

});

port.on('error', (err) => console.log(err));
