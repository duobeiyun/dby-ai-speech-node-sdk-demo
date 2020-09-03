// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const path = require('path')

const DbyAISpeechSDK = require('dby-ai-speech-node-sdk')

const sdk = new DbyAISpeechSDK(path.resolve(__dirname, './dllfiles'))

sdk.init('#dbyAppId', '#dbyAppKey', '#aiSpeechAppId', '#aiSpeechAppKey').then(() => {
    console.log('sdk init success')

    sdk.joinChannel('#channelId', '#uid').then(() =>{
        console.log('sdk join channel success')

        sdk.onUserText((uid, text) =>{
            console.log('on user text ', uid, text)
        })
    }).catch((e) => {
        console.log('sdk join channel failed ', e)
    })
}).catch((e) => {
    console.log('sdk init failed ', e)
})
