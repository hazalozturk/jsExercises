/* Find the area of a triangle where lengths of the three of its sides 
are 5, 6, 7 */

function findArea(a, b, c) {
	var semiperi = (a + b + c) / 2;
	var area = Math.sqrt(
		semiperi * (semiperi - a) * (semiperi - b) * (semiperi - c)
	);

	return area;
}

console.log(findArea(5, 6, 7));
