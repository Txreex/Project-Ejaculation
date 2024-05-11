const {app, BrowserWindow} = require('electron');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Test',
        width: 700,
        height: 500
    });

    mainWindow.loadFile(path.join(__dirname, './render/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();
})