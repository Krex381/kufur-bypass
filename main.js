const { app, BrowserWindow, screen } = require('electron')
const path = require('path')

function createWindow() {
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    
    const win = new BrowserWindow({
        width: Math.min(1000, width * 0.8),
        height: Math.min(800, height * 0.8),
        minWidth: 400,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        backgroundColor: '#1a1a1a',
        icon: path.join(__dirname, 'icon.png'),
        frame: false,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#1a1a1a',
            symbolColor: '#00ff9d'
        },
        center: true,
        autoHideMenuBar: true
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
