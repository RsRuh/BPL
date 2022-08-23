// to get the selected players numbers
function getPlayerList() {
	const playerList = document.getElementById('player-list');
	return playerList;
}

function getPlayer(elementId, btnId) {
	const players = document.getElementById('player-list').childElementCount;
	if (players === 5) {
		alert('You Cannot Select More Than 5 Player');
		return;
	}
    else {
		const element = document.getElementById(elementId);
		const elementText = element.innerText;

		const playerList = getPlayerList();

		const li = document.createElement('li');
		const liText = document.createTextNode(elementText);
		li.appendChild(liText);
		playerList.appendChild(li);
		document.getElementById(btnId).disabled = true;
	}
}


// select button of Mashrafe Bin Murtaza
document.getElementById('btn-a').addEventListener('click', function () {
	getPlayer('mashrafe', 'btn-a');
});

// select button of Shakib Al Hasan
document.getElementById('btn-b').addEventListener('click', function () {
	getPlayer('shakib', 'btn-b');
});

// select button of Tamim Iqbal
document.getElementById('btn-c').addEventListener('click', function () {
	getPlayer('tamim', 'btn-c');
});

// select button of Mustafizur Rahman
document.getElementById('btn-d').addEventListener('click', function () {
	getPlayer('mustafizur', 'btn-d');
});

// select button of Mushfiqur Rohim
document.getElementById('btn-e').addEventListener('click', function () {
	getPlayer('mushfiqur', 'btn-e');
});

// select button of Mahmudullah Riad
document.getElementById('btn-f').addEventListener('click', function () {
	getPlayer('mahmudullah', 'btn-f');
});
// select button of Sabbir Hosen
document.getElementById('btn-g').addEventListener('click', function () {
	getPlayer('sabbir', 'btn-g');
});
// select button of Soumy Sarkar
document.getElementById('btn-h').addEventListener('click', function () {
	getPlayer('soumya', 'btn-h');
});
// select button of Taskin Ahmed
document.getElementById('btn-i').addEventListener('click', function () {
	getPlayer('taskin', 'btn-i');
});


const btnDisable1 = document.querySelector('#btn-a');
btnDisable1.addEventListener(
	'click',
	() => (btnDisable1.style.backgroundColor = '#808080'),
);
const btnDisable2 = document.querySelector('#btn-b');
btnDisable2.addEventListener(
	'click',
	() => (btnDisable2.style.backgroundColor = '#808080'),
);
const btnDisable3 = document.querySelector('#btn-c');
btnDisable3.addEventListener(
	'click',
	() => (btnDisable3.style.backgroundColor = '#808080'),
);
const btnDisable4 = document.querySelector('#btn-d');
btnDisable4.addEventListener(
	'click',() => (btnDisable4.style.backgroundColor = '#808080'),
);
const btnDisable5 = document.querySelector('#btn-e');
btnDisable5.addEventListener(
	'click',
	() => (btnDisable5.style.backgroundColor = '#808080'),
);
const btnDisable6 = document.querySelector('#btn-f');
btnDisable6.addEventListener(
	'click',
	() => (btnDisable6.style.backgroundColor = '#808080'),
);
const btnDisable7 = document.querySelector('#btn-g');
btnDisable7.addEventListener(
	'click',
	() => (btnDisable7.style.backgroundColor = '#808080'),
);
const btnDisable8 = document.querySelector('#btn-h');
btnDisable8.addEventListener(
	'click',
	() => (btnDisable8.style.backgroundColor = '#808080'),
);
const btnDisable9 = document.querySelector('#btn-i');
btnDisable9.addEventListener(
	'click',
	() => (btnDisable9.style.backgroundColor = '#808080'),
);