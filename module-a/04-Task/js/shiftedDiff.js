/**
 * Write a function that receives two strings and returns the number of characters we would need to rotate the first string forward to match the second.
 *
 * @param {String} first
 * @param {String} second
 * @return {Number}
 */
function shiftedDiff(first, second) {
	if (first.length !== second.length) {
		return -1;
	}

	let concatenated = first + first;
	let index = concatenated.indexOf(second);

	return index >= 0 ? index : -1;
}

document.getElementById('calc').addEventListener('click', function () {
	const string1 = document.getElementById('string1').value;
	const string2 = document.getElementById('string2').value;
	const result = shiftedDiff(string2, string1);
	document.getElementById('message').innerText = result;
});