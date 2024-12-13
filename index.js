// --- DECLARATIONS ---
let freshGays = [
	"Cavetown",
	"Girl in Red",
	"Chapell Roan",
	"lady Gaga",
	"Sam Smith",
	"Demi lovato",
	"Kesha",
	"Måneskin",
	"Sleep Taken",
	"Lena Raine",
	"Todrick Hall",
	"Lil Nas X",
	"Black Polish",
	"Cursed Headrest",
	"Kit Connor",
	"Joe Locke",
	"Yasmin Finney",
	"Bill Kaulitz",
	"Elton John",
	"Peach Rings",
	"Chloe Moriondo",
	"Billie Joe Armstrong",
	"Reindeiry",
	"Billie Eilish",
	"Sophie",
	"Noah Finnce",
	"Yu",
	"Wrabel",
	"Elliot Page",
	"Lavetne Cox",
	"Jim Parson",
	"Marlene Dietrich",
	"Sir Tom Mchellen",
	"Freddie Mercury",
	"Ru Paul",
	"Goethe",
	"Schiller",
	"Hans - Christian Anderson",
	"Leonardo DaVinci",
	"Jesus lol",
	"Gott *",
	"antikes Rom",
	"antikes Griechenland",
	"Clairo",
	"Sappho",
	"Bocks",
	"Emily Dickinson",
	"Julie d'Aubigny",
	"William Shakespeare",
	"James Barry",
	"Jane Austin",
	"Alice Oreman",
	"Fritz Bauer",
	"Bambie Thug",
	"Nemo",
	"Black Dresses",
	"Femtanyl",
	"Against Me!",
	"Fostas Kind",
	"darkvictory",
	"Harry Styles",
	"Miley Cyrus",
	"Olivia Jones",
	"Pink!",
	"Quinn",
	"Reol",
	"Tesa Thompson",
	"Uwe Kröger",
	"Violet Chacki",
	"Yungblud",
	"Zwyntar",
];

let usedGays = [];

const getFreshGay = () => {
	if (freshGays.length <= 0) return "n/a";

	const idx = Math.floor(Math.random() * freshGays.length);
	const gay = freshGays.splice(idx, 1)[0];
	usedGays.push(gay);

	return gay;
}

const resetGays = () => {
	freshGays = [...freshGays, ...usedGays];
	usedGays = [];
}

function printBingo(amnt = document.getElementById("amnt").value) {
	amnt--;

	const t = document.getElementsByTagName("table")[0];

	const tmp_ts = new Array(amnt);
	for (let i = 0; i < amnt; i++) {
		tmp_ts[i] = t.cloneNode(true);
		fillBingo(tmp_ts[i]);
		document.body.appendChild(tmp_ts[i]);
	}

	window.print();

	for (let i = 0; i < amnt; i++) {
		tmp_ts[i].remove();
	}
}

function fillBingo(table) {
	const data = table.querySelectorAll("td");
	data.forEach((d, i) => {
		if (i == 12) {
			d.innerText = "FREI";
			return;
		}
		d.innerText = getFreshGay();
	});
	resetGays();
}

// --- START ---
fillBingo(document.getElementsByTagName("table")[0])
