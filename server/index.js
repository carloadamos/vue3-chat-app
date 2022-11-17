const WebSocketServer = require('ws');

const wss = new WebSocketServer.Server({ port: 3333 });

wss.on('connection', (ws) => {
  console.log('The client connected');

  ws.on('message', (data) => {
    console.log(`The client has sent us ${data}`);
  });

  ws.on('close', () => {
    console.log('The client has disconnected');
  });
});

console.log('The WebSocket server is running on port 3333');
