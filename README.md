# arduinoRFID

Read RFID cards with Arduino and connect them to Express app by serialport.

## Web app
The webapp is located in the app folder. To launch the local server we will need to install Node.js, a run-time environment for JavaScript.

### Requirements
- node.js
- npm (it's included with node installation)

After clone or download the repo install the dependencies.

### Build Setup

``` bash
# connect arduino via usb to the computer and change your serialport name. In my case is: "/dev/cu.wchusbserial1420"
# install dependencies
$ npm install

# serve the app on the browser
$ node server.js

```

### Troubleshooting
If your mac doesn't detect usb serial port you can try with this:
https://github.com/adrianmihalko/ch340g-ch34g-ch34x-mac-os-x-driver

Depends on your RFID card you have to add a library to your Arduino IDE (MFRC522.h...)
