// Requires //
const express = require('express');
const compression = require('compression');

// Initializations //
let server = express();

// Settings //
server.set('port', process.env.PORT || 3000);

// Middlewares //
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(compression());

// Routes //
let msg = (req, res) => res.json({ message: 'Server Works, and Database connected!!' });
server.get('/', msg);

// Server ON //
server.listen(server.get('port'), () => console.log(`Server on port ${server.get('port')}`));

// Exports //
module.exports = server;