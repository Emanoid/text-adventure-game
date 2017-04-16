var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Player = require('./player');

var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];

// === Utility Functions ===
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function generateGameName() {
    return randomEl(adjectives) + ' ' + randomEl(nouns);
}

var GAMENAMES = {};
var GAMESTATES = {};

function recapGameName(recapName, newAssignedName) {
    console.log('recap!', recapName);
    delete GAMENAMES[newAssignedName];
    GAMENAMES[recapName] = true;
}

function saveGameState(gsName, state) {
    GAMESTATES[gsName] = state;
}

function loadGameState(gsName) {
    return GAMESTATES[gsName];
}

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public_html'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public_html/index.html');
});

io.on('connection', function (socket) {
	var clientId = generateUUID();
    var gameSaveName = generateGameName();
    while (GAMENAMES[gameSaveName]) {
        gameSaveName = generateGameName();
    }

    GAMENAMES[gameSaveName] = true;

	console.log('registering ', clientId, ' with game name: ', gameSaveName);
	//userManager.registerUser(clientId, socket);
	var player = new Player(clientId, socket, gameSaveName, {
        onRecapUpdateName: recapGameName,
        saveState: saveGameState,
        loadState: loadGameState
    });
});

http.listen(app.get('port'), function () {
	console.log('WebApp server listening on *:'+app.get('port'));
});
