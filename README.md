# A simple Electron wrapper around the 3CX Web Client

3CX doesn't have a Linux client, so I've made this simple wrapper around the web client.

Pass the URL of your organisation's 3CX Web Client as the first argument to the application.

## Installation

```bash
# Clone the repository
git clone https://github.com/aidenwebb/3cx-electron.git

# Go into the repository
cd 3cx-electron

# Install dependencies
npm install
```

## Usage

```bash
# Run the app - pass the URL of your 3CX Web Client as url=
./node_modules/.bin/electron ./main.js --url=https://your-3cx-web-client-url.com/webclient
```

## Snap

I'll add the package to the snap store once I've bootstrapped it properly and end users don't have to modify the desktop file to make it run.

If using the snap package at the moment, you need to modify the desktop file to include the URL of your 3CX Web Client as an argument to the application.

```bash
# Build the snap
npm run dist

# Install the snap 

sudo snap install --dangerous 3cx-electron_0.1.0_amd64.snap

# Modify the desktop file

sudo nano /var/lib/snapd/desktop/applications/3cx-electron_3cx-electron.desktop

# Add the URL of your 3CX Web Client as an argument to the application

Exec=env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/3cx-electron_3cx-electron.desktop /snap/bin/3cx-electron --url=https://phonesystem.mydomain.co.uk:5001/webclient --height=450 %U
```
