const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const loadurl = app.commandLine.getSwitchValue('url');

let mainWindow;

function createWindow() {

mainWindow = new BrowserWindow({width: 800, height: 600});

mainWindow.loadURL(loadurl);

mainWindow.webContents.on('did-finish-load', () => {
  let name = require('./package.json').name;
  let version = require('./package.json').version;
  mainWindow.webContents.executeJavaScript(`document.title = '${name} ${version}'`);
});
}

app.on('ready', createWindow);
