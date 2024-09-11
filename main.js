const {app, BrowserWindow} = require('electron');
const path = require('path');

//Config of the main window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Test',
        width: 1280,
        height: 720,
        minWidth: 1168,
        minHeight: 657,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });

    const filePath = path.join(__dirname, './render/index_page/index.html');
    console.log(`Loading file from: ${filePath}`);
    mainWindow.loadFile(filePath);

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