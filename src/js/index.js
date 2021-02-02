import MediaPlayer from "./mediaPlayer";
import AutoPlay from "./plugins/AutoPlay"

const video = document.querySelector("#playPause")
const button = document.querySelector("#muted-unmute")

const player = new MediaPlayer(video, [AutoPlay])
   
  

button.onclick = () => player.togglePlay()
  