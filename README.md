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
