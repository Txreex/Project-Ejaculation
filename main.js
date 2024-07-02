const {app, BrowserWindow} = require('electron');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Test',
        width: 1280,
        height: 720,
        minWidth: 500,
        minHeight: 650,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });

    mainWindow.loadFile(path.join(__dirname, './render/index_page/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();
})