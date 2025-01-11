<template>
    <div>
      <div>
        <video-player ref="vedioPlayer" :options="playerOptions" 
          :headers="headers"
          class="video-player vjs-custom-skin"/>        
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props : [ "source" ],
      data() {
          return {
              playerOptions: {
                  autoplay: false,
                  hls:true,
                  aspectRatio: '16:9',
                  fluid: false, 
                  sources: [
                    {
                        src: "",
                        type: 'application/x-mpegURL'
                    }
                  ],

                  controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  // 全屏按钮
                   },
                   playbackRates: [0.7, 1.0,1.25,1.5, 2.0, 2.5],
              },
              headers: {
                'Authorization' : localStorage.getItem("token")
            },
            timer : null,
            playRateTem : 1
          }
      },
      mounted() {
        this.playerOptions['sources'][0]['src'] = this.source
        // 在 video-player 组件内部
        this.$el.addEventListener('touchstart', this.$emit('touchstart'));
        this.$el.addEventListener('touchend', this.$emit('touchend'));
      },
      methods: {
        changeSource(url) {
            this.playerOptions['sources'][0]['src'] = url
        },
        startIncreaseSpeed() {
            this.timer = setTimeout(()=> {
              this.playRateTem = this.$refs.vedioPlayer.player.playbackRate()
              this.$refs.vedioPlayer.player.playbackRate(3.0)
              console.log( this.$refs.vedioPlayer.player)
            }, 1000)
        },
        stopIncreaseSpeed() {
          this.$refs.vedioPlayer.player.playbackRate(this.playRateTem)
          clearTimeout(this.timer)
        }
      }
  }
  </script>
  
  <style>
  
  </style>