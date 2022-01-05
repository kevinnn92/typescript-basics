// Object Destructuring
interface SongDetails {
    author: string;
    year: number;
}

interface MusicPlayer {
    volume: number;
    second: number;
    song: string;
    details: SongDetails;
}

const musicPlayer1: MusicPlayer = {
    volume: 85,
    second: 32,
    song: 'I love you',
    details: {
        author: 'Drake',
        year: 2020
    }
}

const {volume, second, song} = musicPlayer1
const {author, year} = musicPlayer1.details

console.log(`The current volume is ${volume}`);
console.log(`The current second is ${second}`);
console.log(`The song is ${song}`);
console.log(`The author is ${author}`);
console.log(`The song is from the year ${year}`);

// Arrays Destructuring
const dbzChars = ['Goku', 'Vegeta', 'Trunks', 'Gohan']
const [goku, vegeta, trunks, gohan] = dbzChars

console.log(goku);
console.log(vegeta);
console.log(trunks);
console.log(gohan);

