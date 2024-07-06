const {app, BrowserWindow} = require('electron');
const path = require('path');

//Config of the main window
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

//Starts the main window when the file is complied
app.whenReady().then(() => {
    createMainWindow();
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })