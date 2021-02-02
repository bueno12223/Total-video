const path = require("path")
const { sources } = require("webpack")

module.exports = {
    entry: {
        login: path.resolve(__dirname, "sources", "index.js"),
        home: path.resolve(__dirname,  "sources", "plugins", "AutoPlay"),
        MediaPlayer: path.resolve(__dirname, "sources", "MediaPlayer.js")
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "bundle-[name].js"
    }


}


