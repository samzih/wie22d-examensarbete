// Fisher–Yates Shuffle algorithm
export default function shuffleArray(array) {
    // Create a copy of the original array
    const newArray = array.slice();
    var m = newArray.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = newArray[m];
        newArray[m] = newArray[i];
        newArray[i] = t;
    }

    return newArray;
}
