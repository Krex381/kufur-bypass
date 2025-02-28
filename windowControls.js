const { remote } = require('electron')

document.getElementById('minimizeBtn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})

document.getElementById('maximizeBtn').addEventListener('click', () => {
    const win = remote.getCurrentWindow()
    if (win.isMaximized()) {
        win.unmaximize()
    } else {
        win.maximize()
    }
})

document.getElementById('closeBtn').addEventListener('click', () => {
    remote.getCurrentWindow().close()
})

// Handle window state changes
const win = remote.getCurrentWindow()
win.on('maximize', () => {
    document.body.classList.add('maximized')
})

win.on('unmaximize', () => {
    document.body.classList.remove('maximized')
})
