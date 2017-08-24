const Hapi = require('hapi')
const PORT = process.env.PORT || 3000
const server = new Hapi.Server()

server.connection({port: PORT})

server.register(require('inert'), (err) => {

	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});

	server.start((err) => {

		if (err) {
			throw err;
		}

		console.log('Server running at:', server.info.uri);
	});
});
