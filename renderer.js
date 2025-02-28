const latindenkibris = {
    // Büyük harfler
    'A': 'А', 'B': 'В', 'C': 'С', 'D': 'Ԁ', 'E': 'Е', 'F': 'Ғ', 'G': 'Ԍ', 'H': 'Н', 
    'I': 'І', 'J': 'Ј', 'K': 'К', 'L': 'Ӏ', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'Р', 
    'Q': 'Ԛ', 'R': 'Я', 'S': 'Ѕ', 'T': 'Т', 'U': 'Ц', 'V': 'Ѵ', 'W': 'Ԝ', 'X': 'Х', 
    'Y': 'Ү', 'Z': 'Ӡ',
    
    // Küçük harfler
    'a': 'а', 'b': 'Ь', 'c': 'с', 'd': 'ԁ', 'e': 'е', 'f': 'ғ', 'g': 'ԍ', 'h': 'һ',
    'i': 'і', 'j': 'ј', 'k': 'к', 'l': 'ӏ', 'm': 'м', 'n': 'п', 'o': 'о', 'p': 'р',
    'q': 'ԛ', 'r': 'г', 's': 'ѕ', 't': 'т', 'u': 'ц', 'v': 'ѵ', 'w': 'ԝ', 'x': 'х',
    'y': 'у', 'z': 'ӡ',
    
    // Türkçe karakterler
    'ç': 'ҫ', 'Ç': 'Ҫ', 'ğ': 'ӷ', 'Ğ': 'Ӷ', 'ı': 'ı', 'İ': 'І', 'ö': 'ӧ', 'Ö': 'Ӧ',
    'ş': 'ş', 'Ş': 'Ş', 'ü': 'ү', 'Ü': 'Ү', 'ē': 'ē', 'ā': 'ā',
    
    // Rakamlar (benzer görünen karakterler)
    '0': 'О', '1': 'І', '2': 'Ҷ', '3': 'Ӡ', '4': '４', '5': 'Ѕ', '6': 'Ѳ', '7': '７',
    '8': 'Ց', '9': '９',
    
    // Özel karakterler
    '.': '․', ',': '՝', '!': '！', '?': '？', '@': '＠', '#': '＃', '$': '＄', 
    '%': '％', '&': '＆', '*': '＊', '(': '（', ')': '）', '-': '－', '+': '＋',
    '=': '＝', '/': '／', '\\': '＼', '|': '｜', '<': '＜', '>': '＞', '[': '［',
    ']': '］', '{': '｛', '}': '｝', '_': '＿', '^': '＾', '`': '｀'
};

function convertabi(text) {
    return text.split('').map(char => latindenkibris[char] || char).join('');
}

function showMessage(text, type = 'success') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = text;
    messageBox.className = `message ${type}`;
    setTimeout(() => {
        messageBox.className = 'message';
    }, 3000);
}

function setLoading(loading) {
    const convertBtn = document.getElementById('convertBtn');
    const loader = document.getElementById('loader');
    const btnText = convertBtn.querySelector('.btn-text');
    
    if (loading) {
        convertBtn.disabled = true;
        loader.style.display = 'inline-block';
        btnText.style.opacity = '0';
    } else {
        convertBtn.disabled = false;
        loader.style.display = 'none';
        btnText.style.opacity = '1';
    }
}

document.getElementById('convertBtn').addEventListener('click', async () => {
    const input = document.getElementById('inputText');
    const output = document.getElementById('outputText');
    
    try {
        setLoading(true);
        
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (!input.value.trim()) {
            throw new Error('Lütfen bir metin girin!');
        }
        
        output.value = convertabi(input.value);
        showMessage('✅ Metin başarıyla dönüştürüldü!');
    } catch (error) {
        showMessage(error.message, 'error');
        output.value = '';
    } finally {
        setLoading(false);
    }
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const output = document.getElementById('outputText');
    navigator.clipboard.writeText(output.value);
    const status = document.getElementById('status');
    status.textContent = '📋 Kopyalandı!';
    setTimeout(() => status.textContent = '', 2000);
});

document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('charCount').textContent = 'Karakter: 0';
    showMessage('🗑️ Tüm alanlar temizlendi');
});

document.getElementById('inputText').addEventListener('input', (e) => {
    document.getElementById('charCount').textContent = `Karakter: ${e.target.value.length}`;
});
