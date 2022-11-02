const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const loadurl = app.commandLine.getSwitchValue('url');
var windowWidth = 450;
var windowHeight = 600;
var showFrame = true;

if (app.commandLine.hasSwitch('width')) {
  windowWidth = app.commandLine.getSwitchValue('width');
}
if (app.commandLine.hasSwitch('height')) {
  windowHeight = app.commandLine.getSwitchValue('height');
}
if (app.commandLine.hasSwitch('hideframe')) {
  showFrame = false;
}

let mainWindow;

function createWindow() {

mainWindow = new BrowserWindow({
  width: windowWidth, 
  height: windowHeight, 
  frame: showFrame,
  resizable: true,
  autoHideMenuBar: true});

mainWindow.loadURL(loadurl);

mainWindow.webContents.on('did-finish-load', () => {
  let name = require('./package.json').name;
  let version = require('./package.json').version;
  mainWindow.webContents.executeJavaScript(`document.title = '${name} ${version}'`);
});
}

app.on('ready', createWindow);
