// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const path = require('path')

const DbyAISpeechSDK = require('dby-ai-speech-node-sdk')

const dllFilePath = path.resolve(__dirname, './dby-ai-speech-node.dll')
const sdk = new DbyAISpeechSDK(dllFilePath)

sdk.init('', '', '', '').then(() => {
    sdk.joinChannel('', '').then(() =>{
        sdk.onUserText((uid, text) =>{
            console.log('on user test ', uid, text)
        })
    })
})
