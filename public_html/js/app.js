window.addEventListener('load', function () {

var clientId;
var state;
var socket = io();

var commandline = document.getElementById('commandline');
commandline.focus();

var textConsole = document.getElementById('console-main');

document.addEventListener('click', function () {
	commandline.focus();
});

commandline.addEventListener('keypress', function (e) {
	if (e.charCode === 13) {
		var command = commandline.value;
		if (!command || command.trim().length === 0) {
			console.log('nothing to do');
		}
		else {
			// Send to socket
			addToConsole(command, 'command');
			socket.emit('command', command);

		}

		commandline.value = '';
		commandline.focus();
	}
});

function addToConsole(message, type) {
	var newMessage = document.createElement('div');
	newMessage.classList.add('console-entry');
	if (type === 'command') {
		newMessage.classList.add('user-command');
	}

	newMessage.innerHTML = message;
	textConsole.appendChild(newMessage);
	
	textConsole.scrollTop = textConsole.scrollHeight;
}

socket.on('message', function (msg) {
	addToConsole(msg);
});

socket.on('state', function (istate) {
	console.log('got state: ', istate);
	state = istate;
});

socket.on('registration', function (id) {
	if (clientId) {
		// We already have a client id, tell the server that we are a recap
		socket.emit('clientReady', {
			id: clientId,
			recap: true,
			state: state
		});
	}
	else {
		clientId = id;
		socket.emit('clientReady', {
			id: clientId
		});
	}
});

});