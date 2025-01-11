
<template>
  <div>
    <div class="player-container">
      <vue-core-video-player :core="HLSCore" :src="source"></vue-core-video-player>
    </div>
  </div>
</template>
<script>
import HLSCore from '@core-player/playcore-hls'

export default {
  data () {
    return {
      HLSCore,
      source : "http://10.252.114.213:8888/vedio/6/1/073fb757935347b29ebf8aac2.m3u8"
    }
  },
  methods: {
    changeSource(url) {
        this.source = url
        console.log(this.source)
    }
  },
  beforeCreate() {
  }
}

</script>
