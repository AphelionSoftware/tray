<template>
  <popup-temp/>
</template>

<script>
import PopupTemp from './../templates/PopupTemp'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    PopupTemp
  },
  data () {
    return {
      msg: 'Empty',
      source: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
