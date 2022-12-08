const { app , BrowserWindow} = require('electron');

const win = new BrowserWindow()


app.on('ready', () => {

    mainWindow = new BrowserWindow({
        
        minWidth: 236,
        minHeight: 730,
        
    });
    
    mainWindow.loadURL(`http://loja.marstore.repl.co/`)
    

});

