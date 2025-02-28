const JsConfuser = require('js-confuser');
const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

// Create assets directory in dist
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
    fs.mkdirSync(assetsPath, { recursive: true });
}

// Confuser configuration
const config = {
    target: "node",
    preset: "high",
    stringEncoding: true,
    stringCompression: true,
    stringConcealing: true,
    stringSplitting: true,
    controlFlowFlattening: true,
    deadCode: true,
    dispatcher: true,
    duplicateLiteralsRemoval: true,
    globalConcealing: true,
    lock: [],
    movedDeclarations: true,
    objectExtraction: true,
    opaquePredicates: true,
    shuffle: true,
    stack: true
};

// Update the package.json for dist
function updatePackageJson() {
    const pkg = require('./package.json');
    const distPkg = {
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        author: pkg.author,
        main: 'main.js',
        scripts: {
            start: 'electron .'
        }
        // Removed dependencies section completely
    };
    
    fs.writeFileSync(
        path.join(distPath, 'package.json'),
        JSON.stringify(distPkg, null, 2)
    );
}

// Files to obfuscate
const filesToObfuscate = [
    'main.js',
    'renderer.js',
    'windowControls.js'
];

// Files to copy directly
const filesToCopy = [
    'index.html',
    'styles.css',
    'package.json',
    ['assets/icon.ico', 'assets/icon.ico']
];

console.log('📦 Preparing build...');

// Copy all files first
filesToCopy.forEach(file => {
    const isArray = Array.isArray(file);
    const source = isArray ? file[0] : file;
    const dest = isArray ? file[1] : file;
    
    try {
        if (source === 'package.json') {
            updatePackageJson();
            console.log('📄 Created dist package.json');
        } else {
            fs.copyFileSync(
                path.join(__dirname, source),
                path.join(distPath, dest)
            );
            console.log(`📁 Copied: ${source}`);
        }
    } catch (err) {
        console.error(`❌ Error with ${source}:`, err.message);
    }
});

// Then obfuscate JS files using js-confuser
async function obfuscateFiles() {
    for (const file of filesToObfuscate) {
        try {
            const code = fs.readFileSync(path.join(__dirname, file), 'utf8');
            const confused = await JsConfuser.obfuscate(code, config);
            
            fs.writeFileSync(
                path.join(distPath, file),
                confused
            );
            console.log(`✅ Encrypted: ${file}`);
        } catch (err) {
            console.error(`❌ Error encrypting ${file}:`, err.message);
        }
    }
    console.log('🎉 Build process complete!');
}

obfuscateFiles().catch(console.error);
