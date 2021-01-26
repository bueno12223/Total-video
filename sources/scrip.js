const video = document.querySelector("video")
        const button = document.querySelector("button")
        function mediaPlayer(conf) {
            this.media = config.el
        }
        mediaPlayer.prototype.play = function (){ this.media.play()}
        const player = new mediaPlayer({ el: video })
        button.onclick = () => video.play()