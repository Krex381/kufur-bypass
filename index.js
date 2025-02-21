const readline = require('readline');

const latindenkibris = {
    'A': 'А', 'B': 'В', 'C': 'С', 'E': 'Е', 'H': 'Н', 'I': 'І', 'J': 'Ј', 'K': 'К', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'Р',
    'S': 'Ѕ', 'T': 'Т', 'U': 'Ц', 'X': 'Х', 'Y': 'Ү', 'a': 'а', 'c': 'с', 'e': 'е', 'i': 'і', 'j': 'ј', 'o': 'о', 'p': 'р',
    's': 'ѕ', 'u': 'ц', 'x': 'х', 'y': 'у', 'ä': 'ӓ', 'ö': 'ӧ', 'ü': 'ү', 'g': 'г', 't': 'т'
};

function convertabi(text) {
    return text.split('').map(char => latindenkibris[char] || char).join('');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Lütfen çevrilecek metni girin: ", (giryazi) => {
    console.log("Dönüştürülmüş: ", convertabi(giryazi));
    rl.close();
});
