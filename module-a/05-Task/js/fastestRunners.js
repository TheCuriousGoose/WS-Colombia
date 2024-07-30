/**
 * @typedef {Object} Runner
 * @property {String} name
 * @property {String[]} paces
 * @typedef {Object} Result
 * @property {String} name
 * @property {String} averagePace
 * @property {String} fastestPace
 */

/**
 * @param {Runner[]} runners
 * @return {Result[]}
 */

function fastestRunners(runners) {
	let filteredRunners = [];

	runners.forEach(runner => {
		let paces = runner.paces.map(pace => {
			let [minutes, seconds] = pace.split(':');
			return parseInt(minutes) * 60 + parseInt(seconds);
		});

		let averagePace = paces.reduce((acc, curr) => acc + curr, 0) / runner.paces.length;
		let fastestPace = Math.min(...paces);

		filteredRunners.push({
			name: runner.name,
			averagePace: normalSecondsToTime(averagePace),
			fastestPace: normalSecondsToTime(fastestPace)
		});
	})

	const runnersDiv = document.getElementById('fastest');

	filteredRunners.forEach(runner => {
		runnersDiv.innerHTML += `<p>${runner.name}: average: ${runner.averagePace} - fastest: ${runner.fastestPace}</p>`;
	})
}

function normalSecondsToTime(seconds) {
	let minutes = Math.floor(seconds / 60);
	let remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${Math.round(remainingSeconds)}`;
}

const runners = [
	{
		"name": "Alice",
		"paces": ["5:50", "6:00", "6:06", "6:07", "6:08", "6:19", "6:28"]
	},
	{
		"name": "Bob",
		"paces": ["6:20", "6:24", "6:36", "6:48", "6:53", "6:58", "6:59"]
	},
	{
		"name": "Charlie",
		"paces": ["6:09", "6:19", "6:20", "6:28", "6:36", "6:34", "6:44"]
	},
	{
		"name": "Dave",
		"paces": ["6:06", "6:04", "6:15", "6:23", "6:22", "6:27", "6:37"]
	},
	{
		"name": "Eve",
		"paces": ["6:18", "6:30", "6:41", "6:52", "6:50", "6:49", "6:57"]
	},
	{
		"name": "Frank",
		"paces": ["5:04", "5:07", "5:06", "5:17", "5:28", "5:39", "5:51"]
	},
	{
		"name": "Grace",
		"paces": ["6:14", "6:17", "6:28", "6:35", "6:34", "6:43", "6:41"]
	},
	{
		"name": "Heidi",
		"paces": ["6:04", "6:04", "6:13", "6:20", "6:25", "6:27", "6:34"]
	},
	{
		"name": "Ivan",
		"paces": ["6:37", "6:41", "6:44", "6:48", "6:53", "6:58", "7:01"]
	},
	{
		"name": "Judy",
		"paces": ["6:10", "6:10", "6:16", "6:16", "6:21", "6:33", "6:42"]
	},
	{
		"name": "Karen",
		"paces": ["5:16", "5:27", "5:30", "5:33", "5:40", "5:49", "5:50"]
	},
	{
		"name": "Larry",
		"paces": ["5:41", "5:51", "5:59", "6:05", "6:10", "6:18", "6:26"]
	},
	{
		"name": "Mallory",
		"paces": ["6:27", "6:38", "6:44", "6:50", "6:56", "7:04", "7:12"]
	},
	{
		"name": "Nancy",
		"paces": ["6:20", "6:21", "6:28", "6:37", "6:35", "6:39", "6:51"]
	},
	{
		"name": "Oscar",
		"paces": ["5:28", "5:30", "5:37", "5:35", "5:34", "5:39", "5:50"]
	},
	{
		"name": "Peggy",
		"paces": ["5:25", "5:25", "5:29", "5:34", "5:44", "5:49", "5:53"]
	},
	{
		"name": "Quinn",
		"paces": ["5:58", "5:57", "5:58", "5:59", "5:59", "6:02", "6:01"]
	},
	{
		"name": "Robert",
		"paces": ["6:32", "6:30", "6:33", "6:32", "6:42", "6:40", "6:45"]
	},
	{
		"name": "Susan",
		"paces": ["6:36", "6:43", "6:54", "7:00", "7:07", "7:18", "7:16"]
	},
	{
		"name": "Tim",
		"paces": ["6:25", "6:23", "6:30", "6:29", "6:33", "6:39", "6:51"]
	},
	{
		"name": "Ursula",
		"paces": ["6:02", "6:11", "6:21", "6:25", "6:37", "6:41", "6:48"]
	},
	{
		"name": "Victor",
		"paces": ["6:11", "6:12", "6:16", "6:23", "6:29", "6:35", "6:46"]
	},
	{
		"name": "Wendy",
		"paces": ["6:10", "6:17", "6:20", "6:18", "6:29", "6:34", "6:37"]
	},
	{
		"name": "Xavier",
		"paces": ["6:35", "6:36", "6:43", "6:48", "6:52", "6:50", "6:56"]
	},
	{
		"name": "Yvonne",
		"paces": ["6:27", "6:28", "6:26", "6:29", "6:31", "6:34", "6:37"]
	},
	{
		"name": "Zach",
		"paces": ["6:10", "6:14", "6:18", "6:19", "6:21", "6:22", "6:29"]
	}
]

fastestRunners(runners);