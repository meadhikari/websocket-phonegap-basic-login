var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  console.log('emit...');
  socket.emit('ping', { message: 'Hello from server ' + Date.now() });
  
  socket.on('login', function (data) {
   if (data.username === "wishfill" && data.password == "wishfill")
    socket.emit('welcome', { message: "Welcome back, "+data.username });
   else
    socket.emit('welcome', { message: "Incorrect Username or password"});
  });
});

console.log('listening on port 8080');