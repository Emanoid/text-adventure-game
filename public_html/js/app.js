window.addEventListener('load', function () {

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

});