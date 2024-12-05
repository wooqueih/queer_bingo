// --- DECLARATIONS ---
const freshGays = [
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

const usedGays = [];

const getFreshGay = () => {
	if (freshGays.length <= 0) return "n/a";

	const idx = Math.floor(Math.random() * freshGays.length);
	const gay = freshGays.splice(idx, 1)[0];
	usedGays.push(gay);

	return gay;
}


// --- START ---
const data = document.querySelectorAll("td");
data.forEach((d, i) => {
	if (i == 12) {
		d.innerText = "FREI";
		return;
	}
	d.innerText = getFreshGay();
});

