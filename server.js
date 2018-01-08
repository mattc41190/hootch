'use strict'

const Path = require('path')
const Hapi = require('hapi')
const Inert = require('inert')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const routes = {
	files: {
		relativeTo: Path.join(__dirname, 'public')
	}
}

const server = new Hapi.Server({host, port, routes})

const provision = async () => {
	await server.register(Inert);

	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
			}
		}
	});

    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();
