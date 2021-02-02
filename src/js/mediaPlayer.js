
class MediaPlayer {
    constructor(video, plugin) {
        this.media = video;
        this.plugins = plugin || [];
        this.initPlugins();
    }
    initPlugins() {
        this.plugins.forEach(Plugin => {
            Plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
            console.log("pausao")
        } else {
            this.pause();
            console.log("dale")
        }

    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        if (this.media.muted){
            this.unmute()
        }else{
            this.mute()
        }
    }
}


export default MediaPlayer;
